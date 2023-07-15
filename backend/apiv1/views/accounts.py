from rest_framework.permissions import AllowAny
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
)

from accounts.models import Account
from ..serializers.accounts import (
    AccountListSerializer,
    AccountDetailSerializer,
)

class AccountListAPIView(ListAPIView):
    """
    List all accounts
    """
    permission_classes = (AllowAny,)
    model = Account
    serializer_class = AccountListSerializer

    def get_queryset(self):
        # Custom logic can be implemented here
        qs = Account.objects.filter(
            is_active=True,
        ).order_by('-created_at')

        return qs


class AccountDetailAPIView(RetrieveAPIView):
    """
    Retrieve an account
    """

    permission_classes = (AllowAny,)
    model = Account
    serializer_class = AccountDetailSerializer

    def get_queryset(self):
        return self.model.objects.filter(id=self.kwargs['pk'])
