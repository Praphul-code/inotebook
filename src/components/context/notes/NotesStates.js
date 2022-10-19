import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  //GET ALL NOTES
  const getNotes = async() => {

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2NiODA4OGFkMDAzZmVmZDViNzcxIn0sImlhdCI6MTY2NTY1MDgyNn0.VYkbh7Y1XopAKFoisvj1-jb9_Ent2yKIitBpGyCJ3Ow"

      },
    });
    const json = await response.json()
 
    setNotes(json)
  }

  // Add a note
  const addNote = async(title, description, tag) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2NiODA4OGFkMDAzZmVmZDViNzcxIn0sImlhdCI6MTY2NTY1MDgyNn0.VYkbh7Y1XopAKFoisvj1-jb9_Ent2yKIitBpGyCJ3Ow"

      },
      body: JSON.stringify({title,description,tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  //Delete a note
  const deleteNote =async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2NiODA4OGFkMDAzZmVmZDViNzcxIn0sImlhdCI6MTY2NTY1MDgyNn0.VYkbh7Y1XopAKFoisvj1-jb9_Ent2yKIitBpGyCJ3Ow"
      }
    });
    const json = response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2NiODA4OGFkMDAzZmVmZDViNzcxIn0sImlhdCI6MTY2NTY1MDgyNn0.VYkbh7Y1XopAKFoisvj1-jb9_Ent2yKIitBpGyCJ3Ow"

      },
      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();
  

let newNotes = JSON.parse(JSON.stringify(notes))


    // Logic to edit in Client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children},
    </NoteContext.Provider>
  )
}

export default NoteState;