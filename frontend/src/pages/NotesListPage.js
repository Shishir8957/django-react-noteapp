import React from 'react'
import Listitem from '../components/Listitem'
import AddButton from "../components/AddButton";

const NotesListPage = () => {
    let [notes,setNote] = React.useState([])

    React.useEffect(()=>{
        getNotes()
    },[])

    let getNotes = async()=>{
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log('Data',data)
        setNote(data)
    }
    
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className="notes-list">
                {notes.map((note,i) => {
                    return(
                        <Listitem key={i} note={note}/>
                    )
                })
              }
            </div>
            <AddButton />
        </div>
    )
}

export default NotesListPage
