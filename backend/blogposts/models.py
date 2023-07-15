from django.db import models
from django.conf import settings
from django.utils.text import slugify

from core import models as core_models

class Blogpost(core_models.BaseModel):
    """
    Blogpost model
    """
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    content = models.TextField(
        max_length=20000,
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='blogposts',
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Blogpost'
        verbose_name_plural = 'Blogposts'
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super(Blogpost, self).save(*args, **kwargs)

    @property
    def content_preview(self):
        return self.content[:200] + '...' if len(self.content) > 200 else self.content
