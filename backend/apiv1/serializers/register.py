from rest_framework import serializers
from register.models import Register

class RegisterListSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Register
        fields = (
            'id',
            'email',
            'first_name',
            'last_name',
            'created_at',
        )

class RegisterDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register

        fields = (
            'id',
            'first_name',
            'middle_initial',
            'last_name',
            'birthday',
            'email',
            'contact_number',
            'pup_branch',
            'student_number',
            'program',
            'year_and_section',
            'other_orgranizations',
            'skills',
            'created_at',
        )