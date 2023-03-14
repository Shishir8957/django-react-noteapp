import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const NotePage = () => {
  const { id: noteId } = useParams()
  let history = useNavigate()
  
  let [note, setNote] = React.useState([])

  React.useEffect(()=>{
    getNote()
  },[])

  let getNote = async () =>{
    if(noteId === 'new') return
    let response = await fetch(`/api/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async() => {
    fetch(`/api/notes/${noteId}/update/`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let createNote = async() => {
    fetch(`/api/notes/new/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/deletenote/`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    history("/")
  }

  let handleSubmit = () => {
    if(noteId !== 'new' && !note.body){
      deleteNote()
    }else if(noteId !== 'new'){
      updateNote()
    }else if( noteId === 'new' && note !==null ){
      createNote()
    }
    history("/")
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <img onClick={handleSubmit} src="https://cpng.pikpng.com/pngl/s/246-2465368_back-arrow-comments-back-arrow-icon-png-clipart.png" width={25}></img>
        </h3>
        {noteId !== 'new' ?(
          <button onClick={deleteNote}>Delete</button>
        ):(
          <button onClick={handleSubmit}>Done</button>
        )}
        
      </div>
      <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} defaultValue={note.body}></textarea>
    </div>
  )
}

export default NotePage
