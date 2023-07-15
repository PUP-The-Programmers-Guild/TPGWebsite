from django.urls import path, include

from .accounts import account_patterns
from .blogposts import blogpost_patterns

urlpatterns = [
    path('auth/', include('rest_framework.urls')),
    path('accounts/', include(account_patterns)),
    path('blogposts/', include(blogpost_patterns)),
]