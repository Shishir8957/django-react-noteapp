from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRouters,name="routes"),
    path('notes/', views.getNotes,name='notes'),
    path('login/', views.insertName,name='insertName'),
    path('view/', views.View,name='View'),
    path('notes/new/', views.createnote,name='createnote'),
    path('notes/<str:pk>/update/', views.updateNote,name='updateNote'),
    path('notes/<str:pk>/deletenote/', views.deleteNote,name='deleteNote'),
    path('notes/<str:pk>', views.getNote,name='note'),
]
