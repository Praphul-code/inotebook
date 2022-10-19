import React, {useContext} from 'react'
import noteContext from './context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note,updateNote } = props;

    return (
        <div className="container col-md-3 my-3 ">
        <div className= "card my-3 cardwidth">
                <div className="card-body ">
                    <h5 className="card-title titlebackground">{note.title}</h5>
                    <p className="card-text descrip"> {note.description}</p>
                    <i className="fa-solid fa-trash-can mx-2 submit" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>

                </div>
            </div>
        </div>
    )
}

export default Noteitem