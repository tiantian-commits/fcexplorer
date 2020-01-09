import re
import os

#import collections

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
    def miner_list():
        f = os.popen("lotus state list-miners")
        result = f.read().strip()
        if len(result) == 0:
            f = open("./data/miners.list", "r")
            result = f.read().strip()
            f.close()

        return result.split('\n')

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

