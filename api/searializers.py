from rest_framework import serializers
from .models import Note,Names

class NoteSearializers(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class NamesSearializers(serializers.ModelSerializer):
    class Meta:
        model = Names
        fields = '__all__'