from django.contrib import admin

from core import admin as core_admin
from .models import Register

class RegisterAdmin(core_admin.AuditModelAdmin):
    model = Register

    list_display = (
        'first_name',
        'last_name',
        'email',
        'created_at',
    )

    list_filter = (
        'pup_branch',
    )

    fieldsets = (
        ('Personal Information', {
            'fields': (
                'first_name',
                'middle_initial',
                'last_name',
                'birthday',
                'email',
                'contact_number',
            )
        }),
        ('Education', {
            'fields': (
                'pup_branch',
                'student_number',
                'program',
                'year_and_section',
            )
        }),
        ('Others', {
            'fields': (
                'other_orgranizations',
                'skills',
            )
        }),
        ('Audit Information', {
            'fields': (
                'created_at',
                'created_by',
                'updated_at',
                'updated_by',
            ),
            'classes': ('collapse',),  # Make this section initially collapsed
        }),
    )

    ordering = (
        '-created_at',
    )

    readonly_fields = (
        'created_at',
        'created_by',
        'updated_at',
        'updated_by',
    )

# Register your models here.
admin.site.register(Register, RegisterAdmin)
