# Generated by Django 2.2.10 on 2020-06-08 00:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_brand_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='slug',
            field=models.SlugField(null=True),
        ),
    ]
