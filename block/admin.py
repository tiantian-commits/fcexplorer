from django.contrib import admin

from .models import Block

# 注册ArticlePost到admin中
admin.site.register(Block)