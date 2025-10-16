from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('rooms/', views.rooms, name='rooms'),
    path('restaurant/', views.restaurant, name='restaurant'),
    path('events/', views.events, name='events'),
    path('spafitnes/', views.spafitnes, name='spafitnes'),
    path('contacts/', views.contacts, name='contacts'),

]
