import React, { useContext, useEffect } from 'react'
import { AddNote } from './AddNote';
import noteContext from './context/notes/noteContext';


import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes,getNotes} = context;
    useEffect(() => {
       
        getNotes()
      // eslint-disable-next-line 
    },[])
    return (
        <>
        <AddNote/>

        
        <div className='container  my-3 '> </div>
       
            <h2 className='my-3'>Your Note's</h2>
            <div className='card-align body1'>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note}/>
            })}
            </div>
       
        </>
    )
}

export default Notes