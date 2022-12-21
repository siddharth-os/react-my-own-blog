import React,{useState} from "react";
import SmallHeading from "./smallHeading";
function Form(props){
    const [inputValue,updateInput]=useState({
        title:"",
        content:""
    })
    function handleChange(event){
        const {name,value}=event.target;
        updateInput((prevValue)=>{
            return {...prevValue,[name]:value}
        })
    }
    function handleSumbit(event){
        props.handleNewItem(inputValue);
        event.preventDefault();
    }
    return(
        <form style={{width:"50%",margin:"2rem auto"}}>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
                <SmallHeading heading={"Title"}/>
            </label>
            <input style={{borderRadius:"0"}} onChange={handleChange} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Blog Title" name="title" value={inputValue.title} />
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
            <SmallHeading heading={"Content"}/>
            </label>
            <textarea style={{borderRadius:"0"}} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3" name="content" value={inputValue.content}></textarea>
            </div>
            <button style={{borderRadius:"0"}} onClick={handleSumbit} type="submit" class="btn btn-primary">
                <SmallHeading heading={"WriteUp"}/>
            </button>
        </form>
    );
};
export default Form;