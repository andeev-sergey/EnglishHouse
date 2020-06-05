from django.shortcuts import render
from .models import *
from django.shortcuts import render
from django.views.generic import ListView, View, DetailView
# Create your views here.


class MainView(ListView):
    model = Brand
    template_name = 'main/main-page.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["events"] = Event.objects.all()[:3]
        context["products"] = Product.objects.all()[:4]
        #context["review"] = Review.objects.all()
        return context


class EventsView(ListView):
    model = Event
    template_name = 'main/events.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["events"] = Event.objects.all()
        return context

class EventoDetailView(DetailView):
    model = Event
    template_name = 'main/event.html'
    context_object_name = 'event'
    extra_context = {'latest': Event.objects.all()[:3]}

class PortfolioDetailView(DetailView):
    model = Project
    template_name = 'main/project.html'
    context_object_name = 'project'
    #extra_context = {'latest': Project.objects.all()[:3]}

class Portfolio(ListView):
    model = Event
    template_name = 'main/portfolio.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["projects"] = Project.objects.all()
        return context

class AboutUsView(ListView):
    model = Brand
    template_name = 'main/about_us.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brands"] = Brand.objects.all()
        return context

def contacts_page(request):
    brands = Brand.objects.all()
    context = {'brands': brands }
    return render(request, 'main/contacts.html', context)

class ProductDetailView(DetailView):
    model = Product
    template_name = "main/product.html"
    context_object_name = 'product'


class CategoryListView(ListView):
    model = Category
    template_name = "main/some.html"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["cat"] = Category.objects.all()
        context["brand"] = Brand.objects.all()
        context["pro"] = Product.objects.all()
        return context