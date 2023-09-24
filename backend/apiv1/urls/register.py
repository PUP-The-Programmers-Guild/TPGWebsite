from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import re_path

from ..views.register import (
    RegisterListAPIView,
    RegisterDetailAPIView,
    RegisterCreateAPIView
)

register_patterns = [
    re_path(
        r'all/$',
        RegisterListAPIView.as_view(),
        name='get_all_registrations'
    ),
    re_path(
        r'(?P<pk>\d+)/$',
        RegisterDetailAPIView.as_view(),
        name='get_registration_detail'
    ),
     re_path(
        r'create/$', 
        RegisterCreateAPIView.as_view(),
        name='create_registration'
    ),
]