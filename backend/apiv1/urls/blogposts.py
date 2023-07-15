from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import re_path

from ..views.blogposts import (
    BlogpostListAPIView,
    BlogpostDetailAPIView,
)

blogpost_patterns = [
    re_path(
        r'all/$',
        BlogpostListAPIView.as_view(),
        name='get_all_blogposts'
    ),
    re_path(
        r'(?P<pk>\d+)/$',
        BlogpostDetailAPIView.as_view(),
        name='get_blogpost_detail'
    )
]
