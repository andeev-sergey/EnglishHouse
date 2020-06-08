from django.contrib import admin
from .models import *
from import_export.admin import ImportExportModelAdmin

# Register your models here.
admin.site.index_title = 'Администрирование сайта'
admin.site.site_title = 'Английский дом'
admin.site.site_header = 'Английский дом'

class BrandExport(ImportExportModelAdmin):
    class Meta:
        model = Brand
    def image_tag(self, obj):
        return format_html('<img height="50px" src="{}" />'.format(obj.preview_image.url))
    image_tag.short_description = 'логотип'
    list_display = ('image_tag','title_ru','title_eng' )

class ProductExport(ImportExportModelAdmin):
    class Meta:
        model = Product
class EventExport(ImportExportModelAdmin):
    class Meta:
        model = Event


admin.site.register(Brand, BrandExport)
admin.site.register(Product, ProductExport)
admin.site.register(Event, EventExport)
admin.site.register(Project)



class CategoryAdmin(admin.ModelAdmin):
    filter_horizontal = ('brands',)

admin.site.register(Category, CategoryAdmin)