from django.contrib import admin

class AuditAdminSaveMixin:
    """
    Mixin for enabling audit saving functionality

    Must be used for any other admin classes to retain edit history
    saving feature:

    Must be the first class to be inherited if you are using multiple
    """

    readonly_fields = [
        "created_at",
        "created_by",
        "updated_at",
        "updated_by",
    ]

    def save_model(self, request, obj, form, change):
        """
        Override save_model to save audit fields
        """
        if not change:
            obj.created_by = request.user
        obj.updated_by = request.user
        obj.save()
        super().save_model(request, obj, form, change)

    def save_formset(self, request, form, formset, change):
        """
        Override save_formset to save audit fields
        """
        instances = formset.save(commit=False)
        for obj in formset.deleted_objects:
            obj.delete()
        for instance in instances:
            if not change:
                instance.created_by = request.user
            instance.updated_by = request.user
            instance.save()
        formset.save_m2m()
        super().save_formset(request, form, formset, change)

class AuditModelAdmin(AuditAdminSaveMixin, admin.ModelAdmin):
    """
    Base ModelAdmin that provides common saving features

    All backend model admins should inherit from this

    When overriding the 'save_model' or 'save_formset' methods of an inheriting class,
    make sure to call the super() method to retain the core audit saving functionality

    ```
    def save_model(self, request, obj, form, change):
        # Custom logic
        super().save_model(request, obj, form, change)
    ```

    The 'list_filter' and 'readonly_fields' should also be retained for uniformity
    """

    list_filter = [
        "created_at",
        "modified_at",
        "is_active",
    ]
