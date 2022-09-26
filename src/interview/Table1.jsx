
import React from "react";
const Table1=()=>{
    let arr=[1,2,3,4,5,6,7,8,9,10]
    let a=arr.map((x)=>
        <div> {x} x 2 is {x*2}</div>
      )
    return(
        <div>
            <div > <center>table 2</center></div>
            <ul>{a}</ul>
        </div>
    )
}
export default Table1;