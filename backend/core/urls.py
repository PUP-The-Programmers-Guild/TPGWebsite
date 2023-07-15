from django.urls import path, include

from apiv1 import urls as apiv1_urls

core_urlpatterns = [
    path('v1/', include(apiv1_urls)),
]