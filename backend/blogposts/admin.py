from django.contrib import admin

from core import admin as core_admin
from .models import Blogpost

class BlogPostAdmin(core_admin.AuditModelAdmin):
    model = Blogpost

    list_display = (
        'title',
        'author',
        'created_at',
    )

    list_filter = (
        'author',
    )

    fieldsets = (
        ('Main Information', {
            'fields': (
                'title',
                'author',
                'content',
            )
        }),
        ('Additional Information', {
            'fields': (
                'created_at',
                'created_by',
                'updated_at',
                'updated_by',
            )
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
admin.site.register(Blogpost, BlogPostAdmin)
