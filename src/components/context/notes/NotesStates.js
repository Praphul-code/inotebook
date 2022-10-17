import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "6347e0e5e1d91d2aeb74647a",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e0e5e1d91d2aeb74647a",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e0e5e1d91d2aeb74647a",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },

        {
          "_id": "6347e0e5e1d91d2aeb74647a",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e0e5e1d91d2aeb74647a",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e0e5e1d91d2aeb74647a",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "person is lazy",
          "date": "2022-10-13T09:56:53.016Z",
          "__v": 0
        },
        {
          "_id": "6347e142e1d91d2aeb74647e",
          "user": "6347cb8088ad003fefd5b771",
          "title": "My rws ",
          "description": "Please wake up ",
          "tag": "person is ",
          "date": "2022-10-13T09:58:26.571Z",
          "__v": 0
        }
      ]
const [notes, setNotes] = useState(notesInitial)

return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;