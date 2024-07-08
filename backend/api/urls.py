from django.urls import path, include 
from rest_framework.routers import DefaultRouter
from .views import ItemViewset

router = DefaultRouter()
router.register(r'items', ItemViewset)

urlpatterns=[
    path('api/', include(router.urls))
]