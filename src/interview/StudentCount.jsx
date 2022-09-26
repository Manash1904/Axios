import React from "react";
import {useState} from 'react';
const StudentCount=()=>{
    let [count,setCount]=useState(0);
    const addStudent=()=>{
        console.log("added student to State");
        setCount(++count);
    }
    return(<div>
    <p>registered students are: {count}</p>
    <button  onClick={addStudent}>Add Student</button>
    </div>)
    
}
export default StudentCount;