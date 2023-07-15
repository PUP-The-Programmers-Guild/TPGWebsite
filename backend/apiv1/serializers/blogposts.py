from rest_framework import serializers

from blogposts.models import Blogpost

class BlogpostListSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    timestamp = serializers.SerializerMethodField()

    class Meta:
        model = Blogpost
        fields = (
            'id',
            'title',
            'content_preview',
            'author_name',
        )

    def get_author_name(self, obj):
        return obj.author.get_full_name()

    def get_timestamp(self, obj):
        return obj.updated_at if obj.updated_at else obj.created_at


class BlogpostDetailSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    timestamp = serializers.SerializerMethodField()

    class Meta:
        model = Blogpost
        fields = (
            'id',
            'title',
            'slug',
            'content',
            'author_name',
            'timestamp',
        )

    def get_author_name(self, obj):
        return obj.author.get_full_name()

    def get_timestamp(self, obj):
        return obj.updated_at if obj.updated_at else obj.created_at
