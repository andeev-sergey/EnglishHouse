from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render

urlpatterns = [
    path('', MainView.as_view(), name='main'),
    #path('eng/', MainEnView.as_view(), name='main_en'),
    path('events', EventsView.as_view(), name='events'),
    #path('eng/events', EventsEnView.as_view(), name='events-eng'),
    path('events/<pk>', EventoDetailView.as_view(), name='event'),
    path('portfolio', Portfolio.as_view(),name='portfolio'),
    path('portfolio/<pk>', PortfolioDetailView.as_view(), name='project-detail'),
    path('product/<pk>', ProductDetailView.as_view(), name='product-detail'),
    path('contacts' , contacts_page, name='contacts'),
    path('about-us', AboutUsView.as_view(), name='aboutus'),
    path('some' ,  CategoryListView.as_view(), name='some'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)