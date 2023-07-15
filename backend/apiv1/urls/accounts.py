from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import re_path

from ..views.accounts import (
    AccountListAPIView,
    AccountDetailAPIView,
)

account_patterns = [
    re_path(
        r'all/$',
        AccountListAPIView.as_view(),
        name='get_all_accounts'
    ),
    re_path(
        r'(?P<pk>\d+)/$',
        AccountDetailAPIView.as_view(),
        name='get_account_detail'
    )
]