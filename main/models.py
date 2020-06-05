from django.db import models
from django.utils.html import format_html
# Create your models here.

class Brand(models.Model):
    title_ru = models.CharField("Название ru", max_length=200, null=True)
    title_eng = models.CharField("Название eng", max_length=200, null=True)
    histiry_text_ru = models.TextField("описание на ru")
    histiry_text_eng = models.TextField("описание на eng")
    preview_image = models.ImageField('Превью', upload_to='images/brands', null=True, blank=False )
    detail_image_1 = models.ImageField('Внутреннее изобржение', upload_to='images/brands', null=False, blank=False)
    detail_image_2 = models.ImageField('Внутреннее изобржение', upload_to='images/brands', null=False, blank=False)

    def image_tag(self):
        return u'<img src="%s">' % self.preview_image.url

    def __str__(self):
        return self.title_ru

    class Meta:
        verbose_name = "Бренд"
        verbose_name_plural ="Бренды"

class Category(models.Model):
    Title_ru = models.CharField("Назвние категории eng", max_length=50)
    Title_eng = models.CharField("Назвние категории eng", max_length=50)
    class Meta:
        verbose_name = "Категория"
        verbose_name_plural ="Категории"

    def __str__(self):
        return self.Title_ru


class Product(models.Model):
    Brand = models.ForeignKey( Brand, on_delete=models.CASCADE )
    title_ru = models.CharField('Название продукта ru' ,max_length=200, null=True)
    title_eng = models.CharField('Название продукта eng' ,max_length=200, null=True)
    description_text_ru = models.TextField('Описание на ru')
    description_text_eng = models.TextField('Описание на eng')
    category = models.ForeignKey(Category, on_delete=models.CASCADE )
    sku = models.CharField('Индивидуальный номер',max_length=200, default='')
    material_ru = models.CharField('материал на ru',max_length=200, default='')
    material_eng = models.CharField('материал на eng',max_length=200, default='')
    shape_ru = models.CharField('Форма на ru',max_length=200, default='')
    shape_eng = models.CharField('Форма на eng',max_length=200, default='')
    preview_image = models.ImageField('Превью',upload_to='images/products/', null=False, blank=False)
    detail_image_1 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_2 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_3 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_4 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_5 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_6 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    def __str__(self):
        return self.title_ru
    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural ="Продукты"


class Event(models.Model):
    title_ru = models.CharField('Название события' ,max_length=200, null=True)
    title_eng = models.CharField('Название события eng' ,max_length=200, null=True)
    description_text_ru = models.TextField('Описание на ru')
    description_text_eng = models.TextField('Описание на eng')
    date_time = models.DateTimeField("Дата и время проведения",auto_now_add=False)
    preview_image = models.ImageField('Превью',upload_to='images/products/', null=False, blank=False)
    detail_image_1 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_2 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    in_head = models.BooleanField('В шапку', default=False)
    def __str__(self):
        return self.title_ru

    class Meta:
        verbose_name = "Событие"
        verbose_name_plural ="События"


class Project(models.Model):
    title_ru = models.CharField('Название проекта' ,max_length=200, null=True)
    title_eng = models.CharField('Название проекта eng' ,max_length=200, null=True)
    detail_image_1 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_2 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_3 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    detail_image_4 = models.ImageField('Внутреннее изображение', upload_to='images/products/detail/', null=True, blank=True)
    target_text_ru = models.TextField('Цель проекта на ru')
    preview_image = models.ImageField('Превью',upload_to='images/products/', null=True, blank=True)
    target_text_eng = models.TextField('цель проекта на eng')
    description_text_ru = models.TextField('Описание на ru')
    description_text_eng = models.TextField('Описание на eng')
    class Meta:
        verbose_name = "Проект в портфолио"
        verbose_name_plural = "Проекты в портфолию"

    def __str__(self):
        return self.title_ru

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})
