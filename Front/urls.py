from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('graph/', views.graph, name='graph'),
    path('mobile/', views.mobile, name = 'mobile'),
]
