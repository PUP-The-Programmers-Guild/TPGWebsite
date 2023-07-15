from django.db import models
from django.conf import settings
from django.contrib.auth.models import UserManager

class AccountManager(UserManager):
    """
    Custom manager for Account model
    """

    def create_user(self, email, password=None, **kwargs):
        """
        Creates and returns an `Account` with an email, username and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        account = self.model(
            email=self.normalize_email(email),
            **kwargs,
        )

        account.set_password(password)
        account.save(using=self._db)
        return account

    def create_superuser(self, email, password, **kwargs):
        """
        Creates and returns a superuser with the given email, username and password.
        """

        account = self.create_user(
            email,
            password=password,
            **kwargs,
        )

        account.is_admin = True
        account.is_staff = True
        account.is_superuser = True
        account.save(using=self._db)

        return account
