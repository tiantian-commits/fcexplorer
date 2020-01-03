import re
import json
import collections

from explorer.settings import LOGGING
import logging

logging.config.dictConfig(LOGGING)
logger = logging.getLogger('django.request')

from django.shortcuts import render
from block.models import Block, Ticket, EPostProof, BlsMessage

############################################## demo begin ##########################################
import math

from django.template import loader
from pyecharts.charts  import Line3D, Line, Tree
#from pyecharts.constants import DEFAULT_HOST
import pyecharts.options as opts

## tree sample
def tree():
    f = open("/home/jiawang/share/django/fcexplorer/data/tree.json", "r")
    data = f.read()
    f.close()

    return (
        Tree(init_opts=opts.InitOpts(width="1400px", height="800px"))
        .add(
            series_name="",
            data=[data],
            pos_top="18%",
            pos_bottom="14%",
            layout="radial",
            symbol="emptyCircle",
            symbol_size=7,
        )
        .set_global_opts(
            tooltip_opts=opts.TooltipOpts(trigger="item", trigger_on="mousemove")
        )
    )

# Line Sample
def line():
    x_data = ["25844", "25845", "25846", "25847", "25849", "25850", "25851"]
    y_data = [32, 48, 51, 64, 78, 83, 91]
    y1_data = [20, 32, 91, 94, 190, 130, 120]

    return (
        Line()
        .set_global_opts(
            tooltip_opts=opts.TooltipOpts("各Method最大值分布图"),
            xaxis_opts=opts.AxisOpts(type_="category"),
            yaxis_opts=opts.AxisOpts(
                type_="value",
                axistick_opts=opts.AxisTickOpts(is_show=True),
                splitline_opts=opts.SplitLineOpts(is_show=True),
            ),
        )
        .add_xaxis(xaxis_data=x_data)
        .add_yaxis(
            series_name="Method3",
            y_axis=y_data,
            symbol="emptyCircle",
            is_symbol_show=True,
            label_opts=opts.LabelOpts(is_show=True),
        )
        .add_yaxis(
            series_name="Method4",
            y_axis=y1_data,
            symbol="emptyCircle",
            is_symbol_show=True,
            label_opts=opts.LabelOpts(is_show=True),
        )
    )

# Line3D sample
def line3d():
    week_en = "Saturday Friday Thursday Wednesday Tuesday Monday Sunday".split()
    clock = (
        "12a 1a 2a 3a 4a 5a 6a 7a 8a 9a 10a 11a 12p "
        "1p 2p 3p 4p 5p 6p 7p 8p 9p 10p 11p".split()
    )
    _data = []
    for t in range(0, 25000):
        _t = t / 1000
        x = (1 + 0.25 * math.cos(75 * _t)) * math.cos(_t)
        y = (1 + 0.25 * math.cos(75 * _t)) * math.sin(_t)
        z = _t + 2.0 * math.sin(75 * _t)
        _data.append([x, y, z])
    range_color = [
        '#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf',
        '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    line3d = Line3D()
    line3d.set_global_opts(
        visualmap_opts=opts.VisualMapOpts(
            dimension=2,
            max_=30,
            min_=0,
            range_color=[
                "#313695",
                "#4575b4",
                "#74add1",
                "#abd9e9",
                "#e0f3f8",
                "#ffffbf",
                "#fee090",
                "#fdae61",
                "#f46d43",
                "#d73027",
                "#a50026",
            ],
        )
    )
    line3d.add(
        "",
        _data,
        xaxis3d_opts=opts.Axis3DOpts(data=clock, type_="value"),
        yaxis3d_opts=opts.Axis3DOpts(data=week_en, type_="value"),
        grid3d_opts=opts.Grid3DOpts(width=100, height=100, depth=100),
    )
    return line3d


def miner_method_count_line(miner_list, methods, miner_methods):
    line = Line()
    line.set_global_opts(
        tooltip_opts=opts.TooltipOpts("各Method最大值分布图"),
        xaxis_opts=opts.AxisOpts(type_="category"),
        yaxis_opts=opts.AxisOpts(
            type_="value",
            axistick_opts=opts.AxisTickOpts(is_show=True),
            splitline_opts=opts.SplitLineOpts(is_show=True),
        ),
    )

    line.add_xaxis(xaxis_data=miner_list)

    # 每种method一条线
    for method in methods:
        y_data = []
        for miner in miner_list:
            y_data.append(miner_methods[miner][method])

        line.add_yaxis(
            series_name="Method"+str(method),
            y_axis=y_data,
            symbol="emptyCircle",
            is_symbol_show=True,
            label_opts=opts.LabelOpts(is_show=True),
        )

    return line

############################################## demo end ##########################################

def miner_list():
    f = open("/home/jiawang/share/django/fcexplorer/data/miners.list", "r")
    data = f.read()
    miner_list = data.split('\n')
    
    f.close()
    return miner_list

def method_count(miners, methods):
    miner_methods = collections.defaultdict(dict)
    blsMessages   = BlsMessage.objects.all()

    for miner in miners:
        for method in methods:
            miner_methods[miner][method] = len(blsMessages.filter(block__miner=miner, method=method))
        print("miner[%s]  total:%s" %(miner, miner_methods[miner]))
    
    return miner_methods


def homepage(request):
    blocks_list = Block.objects.all().order_by('height')[0:10]
 
    # 需要传递给模板（templates）的对象
    #mychart = line3d()
    methods = [2,3,4,5]
    miners  = miner_list()[0:100]
    miner_methods = method_count(miners, methods)
    method_cout_chart = miner_method_count_line(miners, methods, miner_methods)
   
    context = {
        'blocks': blocks_list,
        'method_cout_chart': method_cout_chart.render_embed()
    }

    return render(request, 'index.html', context)


   