import React , {useContext, useState} from 'react'
import noteContext from './context/notes/noteContext';

export const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "" , tag : "default"});
    const handleClick = (e) => {
        e.preventDefault();
      addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className='container'>
            <h1>Add a note</h1>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp"  onChange={onChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="form-group form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
           
        </div>
    )
}
