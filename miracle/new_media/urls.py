from django.urls import path
from . import views

urlpatterns = [
    path('news/',views.newsmedia,name = 'news'),
]