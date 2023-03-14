from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(Note)
class NotesAdmin(admin.ModelAdmin):
    list_display = ['id','body','update','created']

@admin.register(Names)
class NamesAdmin(admin.ModelAdmin):
    list_display = ['id','firstname','lastname']