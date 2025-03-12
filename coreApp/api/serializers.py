from rest_framework.serializers import ModelSerializer
from ..models import CarDetails

class carSerializer(ModelSerializer):
    class Meta:
        model = CarDetails
        fields = ["id","carname","carmodel","year","price"]
        