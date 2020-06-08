from django.shortcuts import render
from .models import *
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.views.generic import ListView, View, DetailView
# Create your views here.


class MainView(ListView):
    model = Brand
    template_name = 'main/main-page.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["events"] = Event.objects.all()[:3]
        context["products"] = Product.objects.all()[:4]
        context["categories"] = Category.objects.all()
        return context


class EventsView(ListView):
    model = Event
    template_name = 'main/events.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["events"] = Event.objects.all()
        context["categories"] = Category.objects.all()
        return context

class EventoDetailView(DetailView):
    model = Event
    template_name = 'main/event.html'
    context_object_name = 'event'
    extra_context = {'latest': Event.objects.all()[:3], 'categories': Category.objects.all()}

class PortfolioDetailView(DetailView):
    model = Project
    template_name = 'main/project.html'
    context_object_name = 'project'
    extra_context = {'categories': Category.objects.all()}


class Portfolio(ListView):
    model = Event
    template_name = 'main/portfolio.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["projects"] = Project.objects.all()
        context["categories"] = Category.objects.all()
        return context

class AboutUsView(ListView):
    model = Brand
    template_name = 'main/about_us.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brands"] = Brand.objects.all()
        context["categories"] = Category.objects.all()
        return context

def contacts_page(request):
    brands = Brand.objects.all()
    context = {'brands': brands, 'categories': Category.objects.all()}
    return render(request, 'main/contacts.html', context)

class ProductDetailView(DetailView):
    model = Product
    template_name = "main/product.html"
    context_object_name = 'product'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()
        return context

class CategoryView(DetailView):
    model = Category
    template_name = "main/category.html"
    context_object_name = 'category'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()

#         context["brand"] = Brand.objects.all()
#         context["pro"] = Product.objects.all()
        return context


class BrandsProductsView(DetailView):
    template_name = 'main/brand.html'
    model = Brand
    context_object_name = 'brand'
#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['products'] = Product.objects.all()
#         return context
    def get_context_data(self, **kwargs):
        context = super(BrandsProductsView,self).get_context_data(**kwargs)
        context["products"] = Product.objects.all()
        context["categories"] = Category.objects.all()
        return context


class CategoryBrandView(DetailView):
        model = Category
        template_name = "main/category-brand.html"
        context_object_name = 'category'

#         def get_context_data(self, **kwargs):
#             context = super().get_context_data(**kwargs)
#             context["categories"] = Category.objects.all()
#             context["products"] = Product.objects.all()
#             return context
def index(request, slug, slug1):
    context = {
    'products':  Product.objects.filter(Brand__slug=slug1),
    'category': Category.objects.get(slug=slug),
    'brand': Brand.objects.get(slug=slug1),
    'categories': Category.objects.all()
    }
    return render(request, "main/category-brand.html", context)
