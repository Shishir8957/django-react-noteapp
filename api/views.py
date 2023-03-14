from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .searializers import NoteSearializers,NamesSearializers
# Create your views here.

@api_view(['GET'])
def getRouters(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-update')
    searilizers = NoteSearializers(notes,many=True)
    return Response(searilizers.data)

@api_view(['GET'])
def getNote(request,pk):
    notes = Note.objects.get(id=pk)
    searilizers = NoteSearializers(notes,many=False)
    return Response(searilizers.data)

@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    print(data)
    note = Note.objects.get(id=pk)
    serializer = NoteSearializers(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def insertName(request):
    data = request.data
    print(data)
    login = Names.objects.create(
        firstname = data['firstname'],
        lastname = data['firstname']
    )
    serializer = NamesSearializers(login, data=data)
    return Response(serializer)

@api_view(['GET'])
def View(request):
    notes = Names.objects.all()
    searilizers = NamesSearializers(notes,many=True)
    return Response(searilizers.data)
    
@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')

@api_view(['POST'])
def createnote(request):
    data = request.data
    note = Note.objects.create(
        body = data['body']
    )
    serializer = NoteSearializers(note, data=data)
    return Response(serializer)