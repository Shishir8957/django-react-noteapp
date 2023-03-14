from django.db import models

# Create your models here.
class Note(models.Model):
    body = models.TextField(null=True,blank=True)
    update = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.body[0:50]
class Names(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    def __str__(self):
        return self.firstname