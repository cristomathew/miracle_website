from django.urls import path
from . import views

urlpatterns = [
    path('designs/',views.design,name = 'design'),
]