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
        <div className='container' >

            <h1 className=' ratio ratio-21x9 text-center   rounded shadow-lg addanote'>Add A Note</h1>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="title"><h3 >Title</h3></label>
                    <input type="text" className="form-control titleplaceholder " id="title"  name="title" aria-describedby="emailHelp" placeholder='Enter Your Title...' onChange={onChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description"><h3>Description</h3></label>
                    <input type="text" className="form-control titleplaceholder" id="description" name="description" placeholder='Enter Your Description...' onChange={onChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="tag"><h3>Tag</h3></label>
                    <input type="text" className="form-control titleplaceholder" id="tag" name="tag" placeholder='Enter Your Tag...' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-light submit titlebackground" onClick={handleClick}>Add Note</button>
            </form>
           
        </div>
    )
}
