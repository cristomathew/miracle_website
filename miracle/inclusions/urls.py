from django.urls import path
from . import views

urlpatterns = [
    path('inclusions/',views.inclusions,name = 'inclusions'),
]