import React,{Component} from "react";
class FunctStudentCount extends Component{
    constructor(props)
        {
            super(props);
            this.state={count:0}
        }
        addStudent=()=>{
            this.setState(pre=>{
                return{count:pre.count+1}}
                // count=pre+1
            )
        }
    render(){
        
        return(<div>
            <p>number of students registered is{this.state.count}</p>
            <button onClick={this.addStudent}>Add Student</button>
        </div>)
    }
}
export default FunctStudentCount;


// import React,{Component} from "react";
// import "./style.css"
// class FunctStudentCount extends Component{

//         constructor(props)
//         {
//             super(props);
//             this.state={count:0}
//             // this.addStudent = this.addStudent.bind(this);
//         }
//         addStudent=()=>{
//                 this.setState((pre)=>{return {count:pre.count+1}})
//         }
//     render(){
//         return(<div clasName="main">
//                 <p className="para"> Students Registered till now{this.state.count}</p>
//                 <button className="btn" onClick={this.addStudent}>add student</button>
//         </div>)
//     }

// }
// export default FunctStudentCount;

