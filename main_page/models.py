from django.db import models


class HomePage(models.Model):
    title = models.CharField(max_length=200)
    hero_image = models.URLField(help_text='Enter the URL of the hero image')
    hero_blurb = models.TextField()
    schedule_link = models.URLField(blank=True)
    call_link = models.CharField(
    max_length=100,
    blank=True,
    help_text="Use tel:+1234567890 for phone calls"
    )


    def __str__(self):
        return "Home Page Content"
    

class Feature(models.Model):
    homepage = models.ForeignKey(HomePage, on_delete=models.CASCADE, related_name='features')
    icon_url = models.URLField(
    blank=True,
    help_text='Add the Heroicon image URL here'
    )
    service_name = models.CharField(max_length=100)
    blurb = models.TextField()
    detail_url = models.CharField(
    max_length=200,
    blank=True,
    help_text="Optional: link to a dedicated service or detail page"
    )   

    def __str__(self):
        return self.service_name
    

class SecondarySection(models.Model):
    homepage = models.OneToOneField(HomePage, on_delete=models.CASCADE, related_name='secondary_section')
    sub_title = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    image = models.URLField(help_text='Enter the URL of the image here')
    blurb = models.TextField()
    schedule_link = models.URLField(blank=True)
    detail_url = models.CharField(
    max_length=200,
    blank=True,
    help_text="Optional: link to a dedicated service or detail page"
    )
    
