from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import(
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
)

from register.models import Register
from ..serializers.register import (
    RegisterDetailSerializer,
    RegisterListSerializer
)

class RegisterListAPIView(ListAPIView):
    """
    List all registrations
    """

    permission_classes = (AllowAny,)
    model = Register

    serializer_class = RegisterListSerializer

    def get_queryset(self):
        qs = Register.objects.filter(
            is_active=True,
        ).order_by('-created_at')

        return qs
    
class RegisterDetailAPIView(RetrieveAPIView):
    """
    Retrieve a registration
    """

    permission_classes = (AllowAny,)
    model = Register
    serializer_class = RegisterDetailSerializer

    def get_queryset(self):
        return self.model.objects.filter(id=self.kwargs['pk'])
    
class RegisterCreateAPIView(CreateAPIView):
    """
    Create new registration
    """

    permission_classes = (AllowAny,)
    serializer_class = RegisterDetailSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)