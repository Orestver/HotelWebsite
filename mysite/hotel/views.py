from django.shortcuts import render

from django.conf.urls import handler404



def custom_404(request, exception):
    return render(request, '404.html', status=404)

handler404 = custom_404



def home(request):
    return render(request,'index.html')


def rooms(request):
    return render(request, 'rooms.html')


def restaurant(request):
    return render(request, 'restaurant.html')

def events(request):
    return render(request, 'events.html')

def spafitnes(request):
    return render(request, 'spa_fitness.html')


def contacts(request):
    return render(request, 'contacts.html')