# Generated by Django 4.2.20 on 2025-03-31 00:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0003_remove_feature_icon'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feature',
            name='title',
        ),
    ]
