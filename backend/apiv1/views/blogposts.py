from rest_framework.permissions import AllowAny
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
)

from blogposts.models import Blogpost
from ..serializers.blogposts import (
    BlogpostListSerializer,
    BlogpostDetailSerializer,
)

class BlogpostListAPIView(ListAPIView):
    """
    List all blogposts
    """
    permission_classes = (AllowAny,)
    model = Blogpost
    serializer_class = BlogpostListSerializer

    def get_queryset(self):
        # Custom logic can be implemented here
        qs = Blogpost.objects.filter(
            is_active=True,
        ).order_by('-created_at')

        return qs


class BlogpostDetailAPIView(RetrieveAPIView):
    """
    Retrieve a blogpost
    """

    permission_classes = (AllowAny,)
    model = Blogpost
    serializer_class = BlogpostDetailSerializer

    def get_queryset(self):
        return self.model.objects.filter(id=self.kwargs['pk'])
