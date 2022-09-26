import React from "react";
import "./style.css"
class FunctProps extends React.Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(<div className="main">name:{this.props.name}<br></br>
         age:{this.props.age}
    {console.log(this.props.name)}
    <table border="1px" className="table">
        <tr><th>name</th><th>age</th></tr>
        <tr><td>{this.props.name}</td><td>{this.props.age}</td></tr>

    </table>
    </div>)
    }
}
export default FunctProps;