npm install
npm start

DidUpdates:

- gets called on setState
- reads updated state values
- dom operations
- 


 * React Fragment
 * <React.Fragment></React.Fragment>
 * <></>
 * 
 * attributes not allowed for fragments
 *
 *  <div style={}></div> -- correct
  <React.Fragment style={}></React.Fragment> -- incorrect
 

const LL = () => {
  const a = 8 + 9;
  return <div>{a}</div>;
};

const L1 = () => <div>L1</div>;


const ImgStyles = {
  height: "100px",
  width: "50px",
  borderTop: "3px solid red",
  borderRight: "5px solid red",
};

border-top === borderTop
border-right === borderRight

/**

Axios --- Promise [resolve, reject]

Communication b/w Backend and Frontend:

JSON: {
    student: "PGa",
    std: "78"
}
key === string, value === string => JSON

obj = {
    student: "t",
    std: 45
}

String
html Page
XML

EndPoint: http://localhost:3000/sampleJSONs/sample1.json

http status:
success - 200
error - 500, 400, 404

*/
