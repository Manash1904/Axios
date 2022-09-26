import React,{useEffect,useState} from 'react'
import "./styles.css"
import axios from 'axios'

export const Axios1 = () => {
  const [data,setData]=useState([]);
  useEffect(
    ()=>axios.get("https://jsonplaceholder.typicode.com/todos").then(
      Response=>setData(Response.data)
    )
    ,[])
  return (

      
    
    <div >
      {
        data.map(d1=><li className='body1'>Title:{d1.title}</li>)
      }
    </div>
     
  )
}
export default Axios1;
