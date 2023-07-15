from django.db import models
from django.conf import settings

class BaseModel(models.Model):
    """
    Base abstract model that provides common fields and methods
    Inherited by all models

    @field
    is_active: Deactivate instead of deleting record permanently
    """

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name='%(class)s_created_by',
        blank=True,
        null=True,
    )
    updated_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name='%(class)s_updated_by',
        blank=True,
        null=True,
    )

    class Meta:
        abstract = True


class Appuser(BaseModel):
    """
    Base abstract model for app users that inherits BaseModel
    """

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='appuser',
    )

    def __str__(self):
        return self.email
