import DeleteIcon from '@material-ui/icons/Delete';
const Note=(props)=>{

    const handleclick=()=>{
        props.onDelete(props.id);
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleclick}><DeleteIcon/></button>
        </div>
    );
}
export default Note