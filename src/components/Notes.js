import React, { useContext, useEffect, useRef ,useState} from 'react'
import { AddNote } from './AddNote';
import noteContext from './context/notes/noteContext';


import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {

        getNotes()
        // eslint-disable-next-line 
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "" ,etitle: "", edescription: "" , etag : ""});

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag} )
    }
   

   
  
    const handleClick = (e) => {
        console.log("Updatimg The  Note" , note)
        editNote(note.id, note.etitle, note.edescription , note.etag )
        refClose.current.click();
        
     
    }

    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value})
    }
  
  
  
    return (
        <>
            <AddNote />


            <button ref={ref} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content  cardwidth2">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button btn-light" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="etitle"><h3 >Title</h3></label>
                                    <input type="text" className="form-control titleplaceholder " id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" placeholder='Enter Your Title...' onChange={onChange}  minLength={5} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="edescription"><h3>Description</h3></label>
                                    <input type="text" className="form-control titleplaceholder" id="edescription" name="edescription" value={note.edescription} placeholder='Enter Your Description...' onChange={onChange} minLength={5} required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="etag"><h3>Tag</h3></label>
                                    <input type="text" className="form-control titleplaceholder" id="etag" name="etag" value={note.etag} placeholder='Enter Your Tag...' onChange={onChange} minLength={5} required />
                                </div>
                                <button type="submit" className="btn btn-light submit titlebackground" onClick={handleClick}>Add Note</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-light submit titlebackground" data-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleClick} className="btn btn-light submit titlebackground">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container  my-3 '> 

            <h2 >Your Note's</h2>
            {notes.length === 0 && "No notes to display"}
            <div className='card-align body1'>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
            </div>

        </>
    )
}

export default Notes