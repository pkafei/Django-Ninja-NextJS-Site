from ninja import Router, Schema
from typing import List, Optional
from main_page import models

HomePage = models.HomePage
Feature = models.Feature
SecondarySection = models.SecondarySection

router = Router()


class FeatureSchema(Schema):
    id: int
    icon_url: str
    service_name: str
    blurb: str
    detail_url: Optional[str]


class SecondarySectionSchema(Schema):
    id: int
    sub_title: str
    title: str
    image: str
    blurb: str
    schedule_link: Optional[str]
    detail_url: Optional[str]


class HomePageSchema(Schema):
    id: int
    title: str
    hero_image: str
    hero_blurb: str
    schedule_link: Optional[str]
    call_link: Optional[str]
    features: List[FeatureSchema]
    secondary_section: Optional[SecondarySectionSchema]


@router.get("/homepage", response=HomePageSchema)
def get_homepage(request):
    homepage = HomePage.objects.first()

    features = homepage.features.all()
    secondary = getattr(homepage, "secondary_section", None)

    return {
        "id": homepage.id,
        "title": homepage.title,
        "hero_image": homepage.hero_image,
        "hero_blurb": homepage.hero_blurb,
        "schedule_link": homepage.schedule_link,
        "call_link": homepage.call_link,
        "features": [
            {
                "id": f.id,
                "icon_url": f.icon_url,
                "service_name": f.service_name,
                "blurb": f.blurb,
                "detail_url": f.detail_url,
            }
            for f in features
        ],
        "secondary_section": {
            "id": secondary.id,
            "sub_title": secondary.sub_title,
            "title": secondary.title,
            "image": secondary.image,
            "blurb": secondary.blurb,
            "schedule_link": secondary.schedule_link,
            "detail_url": secondary.detail_url,
        } if secondary else None,
    }
