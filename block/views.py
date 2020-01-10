import re
import json
import math
import time
import datetime

from explorer.views import homepage
from explorer.settings import LOGGING
import logging

from django.db.models import Max 
from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED, FIRST_COMPLETED

logging.config.dictConfig(LOGGING)

logger = logging.getLogger('django.request')

from django.shortcuts import render
from django.db.models import Q
from django.http import HttpResponse
from .models import *
from .chain import Chain

from apscheduler.schedulers.blocking import BlockingScheduler


##############################################
from django.template import loader
from pyecharts.charts  import Line3D
import pyecharts.options as opts


def get_str_btw(s, f, b):
    par = s.partition(f)
    return (par[2].partition(b))[0][:]

def block_sync_finished(request):
    blocks_list = Block.objects.all()
    context = {
        'blocks': blocks_list,
    }
    context = { 'blocks': blocks_list }
    return render(request, 'block/block_list.html', context)


#def block_sync(request):    
#    scheduler = BlockingScheduler()
#    scheduler.add_job(block_sync_main, "interval", seconds=10, args=[123])
#    scheduler.start()

#    return block_sync_finished(request)

#首先获取已同步的区块高度，然后获取最新高度，再将已同步的和最新区块高度分解成多个任务同步到数据库
def block_sync(request):
    executor = ThreadPoolExecutor(max_workers=10)

    chain_height = Chain.getChainHeight()
    sync_height  = Block.objects.all().aggregate(Max('height'))["height__max"]
    logger.info("%d --> %d" %(sync_height, chain_height))
    if(None ==  sync_height):
        logger.info("No data has been synced, there are %d data to be synchronized" %(chain_height))
        sync_height = 0

    if (chain_height == sync_height):
        logger.info("data is up to date. %d" %(sync_height))
        return block_sync_finished(request)

    chain_list = Chain.getChainList(chain_height, chain_height - sync_height)

    #all_task = [executor.submit(block_sync_thread, (block)) for block in chain_list]
    #wait(all_task, return_when=ALL_COMPLETED)

    for block_summary in chain_list:
        block_sync_thread(block_summary)

    return block_sync_finished(request)

def block_sync_thread(block_summary):
    height          = block_summary[0:block_summary.find(':', 1) ]
    hash_miner_list = get_str_btw(block_summary, "[", "]")
    block_list_str  = re.split(',', hash_miner_list)

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


def block_detail(request):
    hash  = request.GET.get('hash')
    logger.info("hash: %s" %(hash))
    ablock = Block.objects.get(hash=hash)

    blmessages = BlsMessage.objects.filter(block=ablock)

    context = { 
        'ablock': ablock,
        'blmessages': blmessages
    }
    return render(request, 'block/detail.html', context)

def block_count(request):
    to     = request.GET.get('to')
    method = request.GET.get('method')
    logger.info("to: %s, method：%s" %(to, method))
    # 查询集
    blsmessages = BlsMessage.objects.filter(to=to,method=method)
    blsmessages = blsmessages.order_by('block')

    context = {
        'to': to,
        'method': method,
        'blsmessages': blsmessages
    }

    return render(request, 'block/block_count.html', context)

def block_search(request):
    search = request.GET.get('search')
    blocks_list = Block.objects.all()
    # 搜索查询集
    logger.info("search: %s" %(search))
    if search:
        blocks_list = blocks_list.filter(
            Q(miner__icontains=search) |
            Q(height__icontains=search) |
            Q(hash__icontains=search)
        )
    else:
        # 将 search 参数重置为空
        search = ''

    blocks_list.order_by('height')
    context = {
        'blocks': blocks_list,
        'search': search,
    }

    return render(request, 'block/block_search.html', context)

# get blocklist with date
def block_list(request):  
    date = request.GET.get('date')
    if (None == date):
        date = datetime.date.today()

    startTimestr = ("%s %s" %(date, " 00:00:00"))
    startTimestamp = time.mktime(time.strptime(startTimestr, "%Y-%m-%d %H:%M:%S"))

    endTimeStr = ("%s %s" %(date, " 23:59:59"))
    endTimestamp = time.mktime(time.strptime(endTimeStr, "%Y-%m-%d %H:%M:%S"))

    blocks_list = Block.objects.all().filter(timestamp__gte=startTimestamp, timestamp__lte=endTimestamp)
    blocks_list.order_by('height')

    # 需要传递给模板（templates）的对象
    context = {
        'blocks': blocks_list,
        'date': date,
        'startTimestamp' : startTimestamp,
        'endTimestamp' : endTimestamp,
        'currentTimestamp' : startTimestamp,
    }

    # render函数：载入模板，并返回context对象
    return render(request, 'block/block_list.html', context)
    
