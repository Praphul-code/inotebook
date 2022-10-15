import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Praphul",
        "class": "10b"
    }

    const [state, setState] = useState(s1);
    const update = ()=> {
        setTimeout(() => {
            setTimeout(() => {
                setState({
                    "name": "Larry",
                    "class": "11b"
                })
            },1000);
            })
        }
    
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;