# Generated by Django 2.2.10 on 2020-06-08 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_category_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='brands',
            field=models.ManyToManyField(to='main.Brand'),
        ),
    ]
