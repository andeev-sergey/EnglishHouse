from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render

urlpatterns = [
    path('', MainView.as_view(), name='main'),
    path('events', EventsView.as_view(), name='events'),
    path('events/<pk>', EventoDetailView.as_view(), name='event'),
    path('portfolio', Portfolio.as_view(),name='portfolio'),
    path('portfolio/<pk>', PortfolioDetailView.as_view(), name='project-detail'),
    path('product/<pk>', ProductDetailView.as_view(), name='product-detail'),
    path('brand/<slug>', BrandsProductsView.as_view(), name='brand-list'),
    path('contacts' , contacts_page, name='contacts'),
    path('about-us', AboutUsView.as_view(), name='aboutus'),
    path('category/<slug>', CategoryView.as_view(), name='category_detail'),
    path('category/<slug>/<slug1>', index, name='brand-category-list'),
    path('eng/', EngMainView.as_view(), name='main-eng'),
    path('eng/events', EngEventsView.as_view(), name='events-eng'),
    path('eng/events/<pk>', EngEventoDetailView.as_view(), name='event-eng'),
    path('eng/portfolio', EngPortfolio.as_view(),name='portfolio-eng'),
    path('eng/portfolio/<pk>', EngPortfolioDetailView.as_view(), name='project-detail-eng'),
    path('eng/product/<pk>', EngProductDetailView.as_view(), name='product-detail-eng'),
    path('eng/brand/<slug>', EngBrandsProductsView.as_view(), name='brand-list-eng'),
    path('eng/contacts' , engcontacts_page, name='contacts-eng'),
    path('eng/about-us', EngAboutUsView.as_view(), name='aboutus-eng'),
    path('eng/category/<slug>', EngCategoryView.as_view(), name='category_detail-eng'),
    path('eng/category/<slug>/<slug1>', engindex, name='brand-category-list-eng'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)