import re
import json
import datetime
import math
import time

from explorer.views import homepage
from explorer.settings import LOGGING
import logging

logging.config.dictConfig(LOGGING)
logger = logging.getLogger('django.request')

from django.shortcuts import render
from django.db.models import Q
from django.http import HttpResponse
from .models import Block, Ticket, EPostProof, BlsMessage
from .chain import Chain

##############################################
from django.template import loader
from pyecharts.charts  import Line3D
#from pyecharts.constants import DEFAULT_HOST
import pyecharts.options as opts


def get_str_btw(s, f, b):
    par = s.partition(f)
    return (par[2].partition(b))[0][:]

def block_sync1(request):
    blocks_list = Block.objects.all()
    context = {
        'blocks': blocks_list,
    }
    context = { 'blocks': blocks_list }
    return render(request, 'block/list.html', context)

def block_sync(request):
    for line in open("./data/blocks/26519_26619.list"):
        height     = line[0:line.find(':', 1) ]
        hash_miner_list = get_str_btw(line, "[", "]")
        block_list_str  = re.split(',', hash_miner_list)

        for block_str in  block_list_str:
            if(len(block_str.strip())) > 0:
                hash  = block_str[0:block_str.find(':', 1) ].strip()
                miner = block_str[block_str.find(':', 1): ][1:].strip()

                blockstr = Chain.getBlock(hash)
                if ( blockstr.strip() == ''):
                    continue

                logger.info("add block [%s, %s, %s]" %(height, hash, miner))
                block = json.loads(blockstr)
                logger.info("{")

                logger.info("  Miner:%s" %(miner))
                logger.info("  height:%s" %(height))
                logger.info("  Timestamp:%s" %(block["Timestamp"]))
                blockobj = Block.objects.create(height=height, hash=hash, miner=miner, timestamp=block["Timestamp"])

                #Ticket
                ticket = block['Ticket']
                logger.info("  Ticket:{")
                logger.info("    VRFProof:%s" %(ticket['VRFProof']))
                logger.info("  },")
                epostproofobj = Ticket.objects.create(block=blockobj, vrf_proof=ticket['VRFProof'])

                # EPostProof
                ePostProof = block['EPostProof']
                logger.info("  EPostProof:{")
                logger.info("    Proof:%s" %(ePostProof['Proof']))
                logger.info("    PostRand:%s" %(ePostProof['PostRand']))
                logger.info("    Proof:%s" %(ePostProof['Proof']))
                logger.info("  },")
                epostproofobj = EPostProof.objects.create(block=blockobj, proof=ePostProof['Proof'], postrand=ePostProof['PostRand'])

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
                    blsMessageobj = BlsMessage.objects.create(block=blockobj, to=blsmessage['To'], _from=blsmessage['From'], nonce=blsmessage['Nonce'], value=blsmessage['Value'], gas_price=blsmessage['GasPrice'], gas_limit=blsmessage['GasLimit'], method=blsmessage['Method'])
                logger.info("  ],")

                logger.info("  ParentMessages: [")              
                for parentmessage in block['ParentMessages']:
                    logger.info("    {")                      
                    logger.info("      /:%s" %(parentmessage['/']))
                    logger.info("    },")

                logger.info("  ]")

                logger.info("}") #end block

    blocks_list = Block.objects.all()
    context = {
        'blocks': blocks_list,
    }
    context = { 'blocks': blocks_list }
    return render(request, 'block/list.html', context)

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
    print ("date:%s" % (date))

    startTimestr = ("%s %s" %(date, " 00:00:00"))
    startTimestamp = time.mktime(time.strptime(startTimestr, "%Y-%m-%d %H:%M:%S"))
    print (startTimestamp)

    endTimeStr = ("%s %s" %(date, " 23:59:59"))
    endTimestamp = time.mktime(time.strptime(endTimeStr, "%Y-%m-%d %H:%M:%S"))
    print (endTimestamp)

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
    print("startTimestamp:%d endTimestamp:%d currentTimestamp:%d" %(int(startTimestamp), int(endTimestamp), int(time.time())))
    # render函数：载入模板，并返回context对象
    return render(request, 'block/block_list.html', context)
    
