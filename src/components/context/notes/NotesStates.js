import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "6347e0e5e1d91d2aebfd74647a3",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e0e5e1d91d2aeb74647a4",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e0e5e1d91d2aeb74647a5",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },

        {
          "_id": "6347e0e5se1d91d2aeb74647a6",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e0e5e1d91d2aeb74d647a",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e0e5e1d91d2aeb74647a7",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e142e1d91d2aeb74647e8",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My rws ",
          "description": "Please wake up ",
          "tag": "person is ",
          "date": "2022-10-13T09:58:26.571Z",
          "__v": 0
        }
      ]
const [notes, setNotes] = useState(notesInitial)


// Add a note
const addNote = (title,description, tag) => {
  console.log("Adding A new note")
const  note = {
    "_id": "6347e142e1d91d2aeb74647e8",
    "user": "6347cb8088ad003fefd5b771",
    "title": title,
    "description":description,
    "tag": tag,
    "date": "2022-10-13T09:58:26.571Z",
    "__v": 0
  };
   setNotes(notes.concat(note))
}

//Delete a note
const deleteNote = () => {
 
}

//Edit a note
const editNote = () => {
  
}

return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children},
        </NoteContext.Provider>
    )
}

export default NoteState;