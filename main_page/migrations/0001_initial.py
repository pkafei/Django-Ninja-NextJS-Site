# Generated by Django 4.2.20 on 2025-03-30 21:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomePage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('hero_image', models.URLField(help_text='Enter the URL of the hero image')),
                ('hero_blurb', models.TextField()),
                ('schedule_link', models.URLField(blank=True)),
                ('call_link', models.URLField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='SecondarySection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_title', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=200)),
                ('image', models.URLField(help_text='Enter the URL of the image here')),
                ('blurb', models.TextField()),
                ('schedule_link', models.URLField(blank=True)),
                ('detail_url', models.CharField(blank=True, help_text='Optional: link to a dedicated service or detail page', max_length=200)),
                ('homepage', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='secondary_section', to='main_page.homepage')),
            ],
        ),
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('icon', models.ImageField(upload_to='features/icons/')),
                ('title', models.CharField(max_length=100)),
                ('service_name', models.CharField(max_length=100)),
                ('blurb', models.TextField()),
                ('detail_url', models.CharField(blank=True, help_text='Optional: link to a dedicated service or detail page', max_length=200)),
                ('homepage', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='features', to='main_page.homepage')),
            ],
        ),
    ]
