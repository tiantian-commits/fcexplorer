import re
import os

import collections

from explorer.settings import LOGGING
import logging

from .models import Miner
from .models import Block

logging.config.dictConfig(LOGGING)
logger = logging.getLogger('django.request')

def execshell(cmd):
    return os.popen(cmd).read().strip()

class MinerInfo:
    def minerList():
        f = os.popen("lotus state list-miners")
        result = f.read().strip()
        if len(result) == 0:
            f = open("./data/miners.list", "r")
            result = f.read().strip()
            f.close()

        return result.split('\n')

    def miner_power_update(miner, total):
        f = os.popen("lotus state power %s" %(miner))
        result = f.read().strip()
        if result != None and result.isdigit() and int(result) > 0:
            power   = int(result)/(1024*1024*1024)
            percent = (power/total)*100
            miner_obj, created = Miner.objects.update_or_create(id=miner,
                                       defaults = {
                                                 "power": power,
                                                 "percent": percent,
                                                }
                                       )

    def miner_power_list():
       blocks_list  = Block.objects.all()
       miner_list = Miner.objects.all().order_by('power')
       length = len(miner_list)
       if (length > 15):
           return miner_list[0:length]
       else:
           return miner_list[0:15]
       
 