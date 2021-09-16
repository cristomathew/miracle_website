from django.urls import path
from . import views

urlpatterns = [
    path('displayhomes/',views.design,name = 'displayhomes'),
]