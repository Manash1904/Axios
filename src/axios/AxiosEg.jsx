import React from "react";
import axios from "axios";

const Loader = () => <div>Loading...</div>;

const AxiosEg = () => {
  const [students, setStudents] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(true);
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/sampleJSONs/sample1.json")
      .then((data) => {
        //console.log("success", data.data);
        setIsLoad(false);
        setStudents(data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <div>
      <h5>Listing</h5>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          {students.map((ele, i) => {
            return (
              <div key={i}>
                <div>hello</div>
                <div>Name: {ele.name}</div>
                <div>Std: {ele.std}</div>
                <div>id: {ele.id}</div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default AxiosEg;
