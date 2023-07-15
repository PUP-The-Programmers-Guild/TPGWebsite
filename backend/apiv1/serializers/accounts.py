from rest_framework import serializers

from accounts.models import Account

class AccountListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = (
            'id',
            'email',
            'username',
            'first_name',
            'last_name',
        )

class AccountDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = (
            'id',
            'email',
            'username',
            'first_name',
            'last_name',
            'created_at',
        )