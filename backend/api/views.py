from rest_framework import viewsets
from .models import Item 
from .serializer import ItemSerializer

# Create your views here.


class ItemViewset(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

