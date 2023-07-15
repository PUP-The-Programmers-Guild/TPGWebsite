from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify
from django.utils import timezone

from core import models as core_models
from .managers import AccountManager

class Account(AbstractUser, core_models.BaseModel):

    email = models.EmailField(
        unique=True,
        max_length=255,
        verbose_name='email address',
    )
    username = models.CharField(
        max_length=24,
        unique=True,
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = AccountManager()

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name) \
            if self.first_name and self.last_name else self.email

    @property
    def slug(self):
        return slugify(self.email)

    def save(self, *args, **kwargs):
        self.updated_at = timezone.now()
        return super(Account, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Account'
        verbose_name_plural = 'Accounts'
        ordering = ['-created_at']
