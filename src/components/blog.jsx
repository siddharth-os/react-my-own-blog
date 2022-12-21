import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Blog(props){
    const styleList={
        width:"50%",
        margin:"1rem auto",
        backgroundColor:"#E6E6FA",
        padding:"1rem",
    }
    const styleP={
        height:"80px",
        overflowX:"hidden",
        overflowY:"auto"
    }
    function handleDelete(){
        props.deleteThisItem(props.id);
    }
    return (
        <div style={styleList}>
            <div className="blog-heading">
            <h2 style={{display:"inline"}}> 
                {props.title}
            </h2>
            </div>
            <p style={styleP}>
                {props.content}
            </p>
            <DeleteIcon className="delete-icon" onClick={handleDelete}/>
        </div>
    );
}
export default Blog;