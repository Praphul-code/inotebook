import React, { useContext, useState } from 'react'
import noteContext from './context/notes/noteContext';

export const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='container' >

            <h1 className=' ratio ratio-21x9 text-center   rounded shadow-lg addanote '>Add A Note</h1>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="title"><h3 >Title</h3></label>
                    <input type="text" className="form-control titleplaceholder " id="title" name="title" aria-describedby="emailHelp" placeholder='Enter Your Title...' value={note.title} onChange={onChange} minLength={5} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description"><h3>Description</h3></label>
                    <input type="text" className="form-control titleplaceholder" id="description" name="description" placeholder='Enter Your Description...' value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="tag"><h3>Tag</h3></label>
                    <input type="text" className="form-control titleplaceholder" id="tag" name="tag" placeholder='Enter Your Tag...' value={note.tag} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-light submit titlebackground" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    )
}
