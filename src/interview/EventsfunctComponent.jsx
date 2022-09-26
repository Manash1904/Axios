import React from "react";
const EventsfunctComponent=()=>
{
    function buttonEvent(){
        console.log("button clicked");
    }

    return(<div>
        <button onClick={buttonEvent}>clickme</button>
    </div>)
}
export default EventsfunctComponent;