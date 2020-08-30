from django.shortcuts import render
from .models import *
from django.shortcuts import render, render_to_response
from django.template import RequestContext
from django.shortcuts import get_object_or_404
from django.views.generic import ListView, View, DetailView
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse


# Create your views here.


class MainView(ListView):
    model = Brand
    template_name = 'main/main-page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["events"] = Event.objects.all()[:3]
        context["products"] = Product.objects.all()[:4]
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        context["brands"] = Brand.objects.all()[:4]
        context['random_case'] = Project.objects.order_by('?').first()
        return context


class EventsView(ListView):
    model = Event
    template_name = 'main/events.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["events"] = Event.objects.all()[:7]
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


class EventoDetailView(DetailView):
    model = Event
    template_name = 'main/event.html'
    context_object_name = 'event'
    extra_context = {'latest': Event.objects.all()[:3], 'categories': Category.objects.all(),
                     'projects': Project.objects.all()[:5]}


class PortfolioDetailView(DetailView):
    model = Project
    template_name = 'main/project.html'
    context_object_name = 'project'
    extra_context = {'categories': Category.objects.all(), 'projects': Project.objects.all()[:5]}


class Portfolio(ListView):
    model = Event
    template_name = 'main/portfolio.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["projects"] = Project.objects.all()
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


class AboutUsView(ListView):
    model = Brand
    template_name = 'main/about_us.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brands"] = Brand.objects.all()
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


def contacts_page(request):
    brands = Brand.objects.all()
    context = {'brands': brands, 'categories': Category.objects.all(), 'projects': Project.objects.all()[:5]}
    return render(request, 'main/contacts.html', context)


class ProductDetailView(DetailView):
    model = Product
    template_name = "main/product.html"
    context_object_name = 'product'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


class CategoryView(DetailView):
    model = Category
    template_name = "main/category.html"
    context_object_name = 'category'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


class BrandsProductsView(DetailView):
    template_name = 'main/brand.html'
    model = Brand
    context_object_name = 'brand'

    def get_context_data(self, **kwargs):
        context = super(BrandsProductsView, self).get_context_data(**kwargs)
        context["products"] = Product.objects.all()
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


def index(request, slug, slug1):
    context = {
        'products': Product.objects.filter(Brand__slug=slug1),
        'category': Category.objects.get(slug=slug),
        'brand': Brand.objects.get(slug=slug1),
        'categories': Category.objects.all(),
        'projects': Project.objects.all()[:5]
    }
    return render(request, "main/category-brand.html", context)


class EngMainView(ListView):
    model = Brand
    template_name = 'main/eng/main-page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["events"] = Event.objects.all()[:3]
        context["products"] = Product.objects.all()[:4]
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        context["brands"] = Brand.objects.all()[:4]
        context['random_case'] = Project.objects.order_by('?').first()
        return context


class EngEventsView(ListView):
    model = Event
    template_name = 'main/eng/events.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["events"] = Event.objects.all()[:7]
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


class EngEventoDetailView(DetailView):
    model = Event
    template_name = 'main/eng/event.html'
    context_object_name = 'event'
    extra_context = {'latest': Event.objects.all()[:3], 'categories': Category.objects.all(),
                     'projects': Project.objects.all()[:5]}


class EngPortfolioDetailView(DetailView):
    model = Project
    template_name = 'main/eng/project.html'
    context_object_name = 'project'
    extra_context = {'categories': Category.objects.all(), 'projects': Project.objects.all()[:5]}


class EngPortfolio(ListView):
    model = Event
    template_name = 'main/eng/portfolio.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["projects"] = Project.objects.all()
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


class EngAboutUsView(ListView):
    model = Brand
    template_name = 'main/eng/about_us.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brands"] = Brand.objects.all()
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


def engcontacts_page(request):
    brands = Brand.objects.all()
    context = {'brands': brands, 'categories': Category.objects.all(), 'projects': Project.objects.all()[:5]}
    return render(request, 'main/eng/contacts.html', context)


class EngProductDetailView(DetailView):
    model = Product
    template_name = "main/eng/product.html"
    context_object_name = 'product'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


class EngCategoryView(DetailView):
    model = Category
    template_name = "main/eng/category.html"
    context_object_name = 'category'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


class EngBrandsProductsView(DetailView):
    template_name = 'main/eng/brand.html'
    model = Brand
    context_object_name = 'brand'

    def get_context_data(self, **kwargs):
        context = super(EngBrandsProductsView, self).get_context_data(**kwargs)
        context["products"] = Product.objects.all()
        context["categories"] = Category.objects.all()
        context["projects"] = Project.objects.all()[:5]
        return context


def engindex(request, slug, slug1):
    context = {
        'products': Product.objects.filter(Brand__slug=slug1),
        'category': Category.objects.get(slug=slug),
        'brand': Brand.objects.get(slug=slug1),
        'categories': Category.objects.all(),
        'projects': Project.objects.all()[:5]
    }
    return render(request, "main/eng/category-brand.html", context)


def event_request(request):
    if request.POST:
        email = request.POST.get('email')
        EventRequest.objects.create(
            email=email,
        )
        return HttpResponse("ok", content_type="text/html")
    else:
        return HttpResponse("no", content_type="text/html")


def sub_request(request):
    if request.POST:
        email = request.POST.get('email')
        SubRequest.objects.create(
            email=email,
        )
        return HttpResponse("ok", content_type="text/html")
    else:
        return HttpResponse("no", content_type="text/html")


def handler404(request, exception):
    return render(request, 'main/404.html', locals())
