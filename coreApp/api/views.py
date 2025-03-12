from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from ..models import CarDetails
from .serializers import carSerializer
import json

class CarViewSet(ModelViewSet):
    queryset = CarDetails.objects.all()
    serializer_class = carSerializer

    def destroy(self, request, pk=None):
        """Handles DELETE request for a car"""
        car = get_object_or_404(CarDetails, id=pk)
        car.delete()
        return Response({"message": "Car deleted successfully","car_id":pk}, status=status.HTTP_200_OK)
    


    def create(self, request):
        serializecar = carSerializer(data=request.data)
        print(request.data)
        if serializecar.is_valid():
            serializecar.save()
            return Response({
                "message": "Car Detail added successfully",
                "car_details": serializecar.data 
            }, status=status.HTTP_201_CREATED)  
        
        return Response({"error": serializecar.errors}, status=status.HTTP_400_BAD_REQUEST)

