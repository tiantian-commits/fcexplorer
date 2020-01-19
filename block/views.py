import re
import json
import math
import time
import datetime

from explorer.views import homepage
from explorer.settings import LOGGING
import logging

#from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED, FIRST_COMPLETED

logging.config.dictConfig(LOGGING)

logger = logging.getLogger('django.request')

from django.shortcuts import render
from django.db.models import Q
from django.http import HttpResponse
from .models import *
from .chain import Chain

##############################################
from django.template import loader
from pyecharts.charts  import Line3D
import pyecharts.options as opts

def block_update_finished(request):
    blocks_list = Block.objects.all()
    context = {
        'blocks': blocks_list,
    }
    context = { 'blocks': blocks_list }
    return render(request, 'block/block_list.html', context)


def block_detail(request):
    hash  = request.GET.get('hash')
    logger.info("hash: %s" %(hash))
    ablock = Block.objects.get(hash=hash)

    blmessages = BlsMessage.objects.filter(block=ablock)

    context = { 
        'ablock': ablock,
        'blmessages': blmessages
    }
    return render(request, 'block/block_detail.html', context)

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
    
