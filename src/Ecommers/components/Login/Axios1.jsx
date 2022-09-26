import React from "react";
import axios from "axios";

const Axios1 = () => {
  const [details, setDetails] = React.useState([]);
  
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/sampleJSONs/sample.json")
      .then((data) => {
        console.log("success", data.data[0]);
       
        setDetails(data.data[0]);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <div>
                <div>user valid: {details.isUserValid}</div>
                <div>email: {details.emailId}</div>
                <div>username: {details.username}</div>    
    </div>
  );
};

export default Axios1;