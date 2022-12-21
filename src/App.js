// import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import ResponsiveAppBar from './components/appBar';
import Form from "./components/form";
import Heading from "./components/heading"
import Blog from './components/blog';

function App() {
  const [blogList,updateList]=useState(
    [
      {
        id:"a",
        title:"WorkShop",
        content: "Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Ultrices tincidunt arcu non sodales. Nec tincidunt praesent semper feugiat nibh. Elit ut aliquam purus sit amet luctus venenatis lectus. Arcu dictum varius duis at consectetur lorem donec massa. Consequat id porta nibh venenatis cras sed. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Ullamcorper malesuada proin libero nunc consequat. Ante in nibh mauris cursus mattis molestie a. Leo vel orci porta non pulvinar neque laoreet. Mauris a diam maecenas sed enim ut. Mi bibendum neque egestas congue. Orci porta non pulvinar neque laoreet. Consequat id porta nibh venenatis cras sed. Auctor augue mauris augue neque gravida in fermentum. Sit amet justo donec enim diam vulputate ut pharetra sit. Integer quis auctor elit sed vulputate mi sit amet mauris."
      },
      {
        id:"b",
        title:"Another WorkShop",
        content:"Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Ultrices tincidunt arcu non sodales. Nec tincidunt praesent semper feugiat nibh. Elit ut aliquam purus sit amet luctus venenatis lectus. Arcu dictum varius duis at consectetur lorem donec massa. Consequat id porta nibh venenatis cras sed. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Ullamcorper malesuada proin libero nunc consequat. Ante in nibh mauris cursus mattis molestie a. Leo vel orci porta non pulvinar neque laoreet. Mauris a diam maecenas sed enim ut. Mi bibendum neque egestas congue. Orci porta non pulvinar neque laoreet. Consequat id porta nibh venenatis cras sed. Auctor augue mauris augue neque gravida in fermentum. Sit amet justo donec enim diam vulputate ut pharetra sit. Integer quis auctor elit sed vulputate mi sit amet mauris."
      }
    ]
  );
  function handleNewItem(item){
    updateList((prevValue)=>{
      return [...prevValue,item];
    })
  }
  function deleteThisItem(id){
    console.log(id);
    updateList(prevValue=>{
      return prevValue.filter((item)=>{
        return id!==item.id
      });
    });
  }
  return (
    <div>
    <ResponsiveAppBar />
    <Heading isH2={true} heading={"Create Blog"}/>
    <Form handleNewItem={handleNewItem} />
    <Heading ish2={false} heading={"Blogs List"}/>
    {blogList.map((item,index)=>{
      return (<Blog key={index} id={item.id} title={item.title} content={item.content} deleteThisItem={deleteThisItem}/>)
    })}
    </div>
  );
}

export default App;
