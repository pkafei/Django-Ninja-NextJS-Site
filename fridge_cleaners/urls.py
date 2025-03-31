from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI
from main_page.api import router as main_router

api = NinjaAPI()
api.add_router('/main', main_router)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),
]
