from rest_framework.routers import DefaultRouter
from coreApp.api.urls import car_router
from django.urls import path,include

router = DefaultRouter()
router.registry.extend(car_router.registry)


urlpatterns = [
    path('',include(router.urls))
]
