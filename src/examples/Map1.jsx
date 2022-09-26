import React from 'react'

function Map1(props) {
  let arr=[1,2,3,4]
  return (
    <div>
      {/* hii{numbers=props.name}
     { numbers.map((x)=> {return <li> (x*2) </li>})} */}
      {arr.map((x)=><li>{x*2}</li>)}
    </div>
  )
}

export default Map1
