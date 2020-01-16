import re
import os

import collections

from explorer.settings import LOGGING
import logging

logging.config.dictConfig(LOGGING)
logger = logging.getLogger('django.request')

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
            return 0
        else:
            result = result/(1024*1024*1024*1024)  #TiB
            return result

    def minerList():
        f = os.popen("lotus state list-miners")
        result = f.read().strip()
        if len(result) == 0:
            f = open("./data/miners.list", "r")
            result = f.read().strip()
            f.close()

        return result.split('\n')

    def powerList():
        miners_power = collections.defaultdict(str)

        # miner_list
        f = os.popen("lotus state list-miners")
        result = f.read().strip()
        if len(result) == 0:
            f = open("./data/miners.list", "r")
            result = f.read().strip()
            f.close()

        miner_list = result.split('\n')[0:100]

        rand = 5 #for debug
        logger.info("total %d miners." %(len(miner_list)))
        for miner in miner_list:
            f = os.popen("lotus state power %s" %(miner))
            result = f.read().strip()
            if result != None and result.isdigit() and int(result) > 0:
                miners_power[miner] = int(result)/(1024*1024*1024)
            else: # for debug
                rand += 11
                miners_power[miner] = rand         

        miners_power_list = sorted(miners_power.items(),key=lambda x:x[1] ,reverse=True)

        length = len(miners_power_list)
        if(length > 15):
            length = 15

        return miners_power_list[0:length]

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

