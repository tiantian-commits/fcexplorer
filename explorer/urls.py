from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^$', views.homepage, name="homepage"),
    path('block/', include('block.urls', namespace='block')),
]
