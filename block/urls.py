# 引入path
from django.urls import path

from . import views

app_name = 'block'

urlpatterns = [
    path('blocklist/', views.block_list, name='block_list'),
    path('blockdetail/', views.block_detail, name='block_detail'),
    path('blocksync/',  views.block_sync, name='block_sync'),
    path('blockmethodcount/',  views.block_method_count, name='block_method_count'),
]