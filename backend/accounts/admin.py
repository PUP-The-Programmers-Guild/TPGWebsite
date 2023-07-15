from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from core import admin as core_admin
from .models import Account

PERSONAL_INFO_FIELDS = (
    'Personal Info', {
        'fields': (
            'first_name',
            'last_name',
        )
    }
)

PERMISSIONS_FIELDS = (
    'Permissions', {
        'fields': (
            'is_active',
            'is_staff',
            'is_superuser',
            'groups',
            'user_permissions',
        )
    }
)

ADDITONAL_INFO_FIELDS = (
    'Additional Info', {
        'fields': (
            'created_at',
            'created_by',
            'updated_at',
            'updated_by',
        )
    }
)

class AccountAdmin(core_admin.AuditModelAdmin, UserAdmin):
    model = Account

    list_display = (
        'email',
        'first_name',
        'last_name',
        'is_active',
    )

    list_filter = (
        'is_active',
        'is_staff',
        'is_superuser',
    )

    fieldsets = (
        (None, {
            'fields': (
                'username',
                'email',
                'password',
            )
        }),
        PERSONAL_INFO_FIELDS,
        PERMISSIONS_FIELDS,
        ADDITONAL_INFO_FIELDS,
    )

    add_fieldsets = (
        (None, {
            'fields': (
                'email',
                'password1',
                'password2',
            )
        }),
        PERSONAL_INFO_FIELDS,
        PERMISSIONS_FIELDS,
    )

    search_fields = (
        'email',
        'first_name',
        'last_name',
    )

    ordering = (
        'email',
        '-created_at',
    )

    readonly_fields = (
        'created_at',
        'created_by',
        'updated_at',
        'updated_by',
    )


# Register your models here.
admin.site.register(Account, AccountAdmin)
