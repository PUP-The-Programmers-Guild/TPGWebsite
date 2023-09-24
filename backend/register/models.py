from django.db import models
from django.conf import settings
from django.utils.text import slugify
from core import models as core_models

class Register(core_models.BaseModel):
    """
    Register Model
    """

    """
    Personal Information
    """
    first_name = models.CharField(max_length=100)
    middle_initial = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100)
    birthday = models.DateField()
    email = models.EmailField()
    contact_number = models.CharField(max_length=15)

    """
    Education
    """
    pup_branch = models.CharField(max_length=100)
    student_number = models.CharField(max_length=25)
    program = models.CharField(max_length=100)
    year_and_section = models.CharField(max_length=100)

    """
    Others
    """
    other_orgranizations = models.CharField(max_length=100, blank=True)
    skills = models.CharField(max_length=400, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def set_other_organizations(self, organizations):
        self.other_orgranizations = ",".join(organizations)

    def get_other_organizations(self):
        return self.other_orgranizations.split(",")
    
    def set_skills(self, skills):
        self.skills = ",".join(skills)

    def get_skills(self):
        return self.skills.split(",")

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email})"

    class Meta:
        verbose_name = 'Student Registration'
        verbose_name_plural = 'Student Registrations'
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        self.slug = slugify(self.first_name + self.last_name)
        super().save(*args, **kwargs)