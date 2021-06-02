import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
const CreateArea=(props)=> {

    
const [note,setNote]= useState({
    title:"",
    content:""
});
 const handleChange=(event)=>{
     const {name,value}=event.target;
     setNote(prevNote =>{
        return{
            ...prevNote,
            [name]:value
        };
     });
 }

 const submitNote=(event)=>{
    props.onAdd(note);
     setNote({
            title:"",
            content:""
     });
  event.preventDefault();
 }
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Make a note..." rows="3" />
        <button onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
