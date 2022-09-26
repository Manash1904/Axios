import { Component } from "react";
import React from "react";
class Events extends Component
{
    buttonClick=()=>{
        //e.preventDefault();
           console.log('button clicked');}
    render()
    {
        
        
        
        return(<div>
            <button onClick={this.buttonClick()}>click me</button>
        </div>)
    }
}
export default Events;