import React from 'react'
import { Users } from './Users'

export const Content = (props) => {
    var userData = {
        name: "John",
        age: 30
    }
    const test=()=>{
        alert("test");
    }
  return (
    <div>
        <h1>Content</h1>
        <button onClick={test}>Click me</button>
        {/* {props.payload} */}
        <Users payload ={props.payload} user ={userData} test ={test}/>
        
    </div>
  )
}
