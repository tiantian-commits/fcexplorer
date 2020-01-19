import re
import os
import json
import collections
import logging

from explorer.settings import LOGGING
from .models import *
from .miner import MinerInfo

from django.db.models import Max

from apscheduler.schedulers.background import BackgroundScheduler


logging.config.dictConfig(LOGGING)
logger = logging.getLogger('django.request')

def get_str_btw(s, f, b):
    par = s.partition(f)
    return (par[2].partition(b))[0][:]

def execshell(cmd):
    return os.popen(cmd).read().strip()

def write2file(miner, blockInfos, methods):
    f = open(miner+'.txt','a')
    for blockInfo in blockInfos:
        f.writelines("[%s] \n" %(blockInfo.height))
        for method in methods:
            f.writelines("    method %d count:%d \n" %(method, blockInfo.methods[method]))

    f.close()

class Chain:
    def totalPower():
        f = os.popen("lotus state power")
        result = f.read().strip()
        if len(result) == 0:
            return 1024*1024*1024*1024
        else:
            result = int(result)/(1024*1024*1024*1024)  #TiB
            return result

    def getChainHeight():
        f = os.popen("lotus chain list --count 1")
        result = f.read().strip()

        height  = re.split(' ', result)[0][:-1]
        if (height.isdigit()):
            return int(height)
        else:
            return 25538

    def getChainList(height, count):
        cmd = "lotus chain list --height %s --count %s" %(height, count)
        f = os.popen(cmd)
        result = f.read().strip()
        if len(result) == 0:
            f = open("./data/blocks/26519_26619.list", "r")
            result = f.read().strip()
            f.close()

        chanin_list = result.split('\n')

        return chanin_list

    def getBlock(hash):
        cmd = "lotus chain getblock %s" %(hash)
        f = os.popen(cmd)
        result = f.read().strip()
        if len(result) == 0:
            fname = "./data/blocks/"+hash+".block"
            if os.path.exists(fname):
                f = open(fname, "r")
                result = f.read().strip()
                f.close()

        return result

    def block_update():    
        scheduler = BackgroundScheduler()
        scheduler.add_job(Chain.block_update_job, "interval", seconds=10)
        scheduler.start()
    
    #首先获取已同步的区块高度，然后获取最新高度，再将已同步的和最新区块高度分解成多个任务同步到数据库
    def block_update_job():
        #executor = ThreadPoolExecutor(max_workers=10)
        logger.info("block update start ... ")
    
        chain_height = Chain.getChainHeight()
        sync_height  = Block.objects.all().aggregate(Max('height'))["height__max"]
    
        if(None ==  sync_height):
            logger.info("No data has been synced, there are %d data to be synchronized" %(chain_height))
            sync_height = 0
    
        logger.info("%d --> %d" %(sync_height, chain_height))
        if (chain_height == sync_height):
            logger.info("data is up to date. %d" %(sync_height))
    
        chain_list = Chain.getChainList(chain_height, chain_height - sync_height)
    
        #all_task = [executor.submit(block_update_thread, (block)) for block in chain_list]
        #wait(all_task, return_when=ALL_COMPLETED)
    
        for block_summary in chain_list:
            Chain.block_update_internal(block_summary)

    def block_update_internal(block_summary):
        height          = block_summary[0:block_summary.find(':', 1) ]
        hash_miner_list = get_str_btw(block_summary, "[", "]")
        block_list_str  = re.split(',', hash_miner_list)
        total_power     = Chain.totalPower()
    
        for block_str in  block_list_str:
            if(len(block_str.strip())) > 0:
                hash  = block_str[0:block_str.find(':', 1) ].strip()
                miner = block_str[block_str.find(':', 1): ][1:].strip()
    
                block_detail_str = Chain.getBlock(hash)
                if ( block_detail_str.strip() == ''):
                    continue
    
                logger.info("add block [%s, %s, %s]" %(height, hash, miner))
                block = json.loads(block_detail_str)
                logger.info("{")
    
                logger.info("  \"Miner\":%s" %(miner))
                block_obj, created = Block.objects.update_or_create(hash=hash,
                                               defaults = {
                                                         "height": height,
                                                         "miner": miner,
                                                         "timestamp": block["Timestamp"],
                                                         "parent_weight": block["ParentWeight"]
                                                        }
                                               )
                MinerInfo.miner_power_update(miner, total_power)
                logger.info("  update_or_create %d: %s" %(created, hash)  )
    
                #Ticket
                logger.info("  \"Ticket\": {")
                logger.info("    \"VRFProof\": %s" %(block['Ticket']['VRFProof']))
                logger.info("  },")
                Ticket.objects.create(block=block_obj, vrf_proof=block['Ticket']['VRFProof'])
    
                # EPostProof
                epost_proof_obj = EPostProof.objects.create(block=block_obj, proof=block['EPostProof']['Proof'], postrand=block['EPostProof']['PostRand'])
                logger.info("  \"EPostProof\": {")
                logger.info("    \"Proof\": %s" %(block['EPostProof']['Proof']))
                logger.info("    \"PostRand\": %s" %(block['EPostProof']['PostRand']))
                ## Candidates
                if None != block['EPostProof']["Candidates"]:
                    logger.info("    \"Candidates\": [")
                    for candidate in block['EPostProof']["Candidates"]:
                        logger.info("        {")
                        logger.info("            Partial:%s" %(candidate["Partial"]))
                        logger.info("            SectorID:%s" %(candidate["SectorID"]))
                        logger.info("            ChallengeIndex:%s" %(candidate["ChallengeIndex"]))
                        logger.info("        },")
                        Candidate.objects.create(epost_proof=epost_proof_obj, partial=candidate["Partial"], sector_id=candidate["SectorID"], challenge_index=candidate["ChallengeIndex"])
                    logger.info("      ],") #end of Candidates
    
                logger.info("  },") #end of EPostProof
    
                #Parents
                if None != block['Parents']:
                    logger.info("  Parents: [")
                    for parent in block['Parents']:
                        logger.info("    {")
                        logger.info("        \"/\": %s" %(parent['/']))
                        logger.info("    },")
                        Parent.objects.create(block=block_obj, slash=parent['/'])
                logger.info("  ],")
    
                #ParentWeight
                logger.info("  \"ParentWeight\": %s" %(block["ParentWeight"]))
                #Height
                logger.info("  \"Height\": %s" %(height))
    
                #ParentStateRoot
                logger.info("  \"ParentStateRoot\": {")
                logger.info("    \"/\": %s" %(block['ParentStateRoot']['/']))
                logger.info("  },")
                ParentStateRoot.objects.create(block=block_obj, slash=block['ParentStateRoot']['/'])
    
                #ParentMessageReceipts
                logger.info("  \"ParentMessageReceipts\": {")
                logger.info("    \"/\": %s" %(block['ParentMessageReceipts']['/']))
                logger.info("  },")
                ParentMessageReceipt.objects.create(block=block_obj, slash=block['ParentMessageReceipts']['/'])
    
                #Messages
                logger.info("  \"Messages\": [")
                logger.info("    {")
                logger.info("        \"/\": %s" %(block['Messages']["/"]))
                logger.info("    },")
                Message.objects.create(block=block_obj, slash=block['Messages']['/'])
                logger.info("  ],")
    
                #BLSAggregate
                logger.info("  \"BLSAggregate\": {")
                logger.info("    \"Type\": %s" %(block['BLSAggregate']['Type']))
                logger.info("    \"Data\": %s" %(block['BLSAggregate']['Data']))
                logger.info("  },")
                BLSAggregate.objects.create(block=block_obj, type=block['BLSAggregate']['Type'], data=block['BLSAggregate']['Data'])
    
                #Timestamp
                logger.info("  Timestamp:%s" %(block["Timestamp"]))
    
                #BlockSig
                logger.info("  \"BlockSig\": {")
                logger.info("    \"Type\": %s" %(block['BlockSig']['Type']))
                logger.info("    \"Data\": %s" %(block['BlockSig']['Data']))
                logger.info("  },")
                BlockSig.objects.create(block=block_obj, type=block['BlockSig']['Type'], data=block['BlockSig']['Data'])
    
                #BlsMessages
                logger.info("  BlsMessages: [")              
                for blsmessage in block['BlsMessages']:
                    to     = blsmessage['To']
                    method = int(blsmessage['Method'])
                    nonce  = blsmessage['Nonce']
                    logger.info("    {")                    
                    logger.info("      To:%s" %(blsmessage['To']))
                    logger.info("      From:%s" %(blsmessage['From']))
                    logger.info("      Nonce:%s" %(blsmessage['Nonce']))
                    logger.info("      Value:%s" %(blsmessage['Value']))
                    logger.info("      GasPrice:%s" %(blsmessage['GasPrice']))
                    logger.info("      GasLimit:%s" %(blsmessage['GasLimit']))
                    logger.info("      Method:%s" %(blsmessage['Method']))
                    logger.info("    },")
                    BlsMessage.objects.create(block=block_obj, to=blsmessage['To'], _from=blsmessage['From'], nonce=blsmessage['Nonce'], value=blsmessage['Value'], gas_price=blsmessage['GasPrice'], gas_limit=blsmessage['GasLimit'], method=blsmessage['Method'])
                logger.info("  ],")
    
                #ParentMessages
                if None != block['ParentMessages']:
                    logger.info("  ParentMessages: [")            
                    for parentmessage in block['ParentMessages']:
                        logger.info("    {")                      
                        logger.info("      /:%s" %(parentmessage['/']))
                        logger.info("    },")
    
                logger.info("  ]")
    
                logger.info("}") #end block

        logger.info("block update finished. ")


    def getMinerBlocks(miner, methods):
        blockInfos = []
        count = 100
        chainHeight = getChainHeight()

        while chainHeight > count:
            cmd = "lotus chain list --height %s --count %s" %(chainHeight, count)
            print("exec cmd:%s" %(cmd))
            chainlist = execshell(cmd)
            print('<-------------------------------------------------')
            print ("%s" %(chainlist))
            print('------------------------------------------------->')

            for line in chainlist.splitlines():
                attrs  = re.split(' ', line)
                height = attrs[0][:-1]
                blockInfo = BlockInfo(height, methods)

                blockid  = attrs[5][:-1]
                blockstr = execshell('lotus chain getblock %s' %(blockid))

                block = json.loads(blockstr)
                hasMethod = False
                for blsmessage in block['BlsMessages']:
                   #print("To:%s" %(blsmessage['To']))
                    method = int(blsmessage['Method'])
                    if ((blsmessage['To'] == miner) and ( method in methods)):
                        blockInfo.increase(method)
                        hasMethod = True
                        #print("increase miner:%s height:%s method:%s" %(miner, height, method))

                if(hasMethod):
                    blockInfos.append(blockInfo)
                    print("[%s] add blockInfo" %(blockInfo.height))
                    for method in methods:
                        print("    method: %d count:%d " %(method, blockInfo.methods[method]))

            chainHeight -= count

