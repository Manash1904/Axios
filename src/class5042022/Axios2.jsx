import React,{useEffect,useState} from 'react'
import "./styles.css"
import axios from 'axios'
const Loader=()=>{
    <div> <h5> loading</h5>
        {console.log("loading")}
    </div>
    
}
export const Axios2 = () => {
    const [IsLoading,setIsLoading]=useState(true);
  const [data,setData]=useState([]);
  useEffect(
    ()=>axios.get("http://localhost:3000/sampleJSONs/temp.json").then((Response)=>{setData(Response.data);
    setTimeout(() => {  }, 5000);
    setIsLoading(false);
}
      //Response=>setData(Response.data)
      //setisLoading(false);
    )
    .catch((err)=>{
        console.log("error:",err);
    })
    ,[])
    
  return (
            <div>
                
            {IsLoading ? (<Loader/>):<div >
      {
        data.map(d1=><li key = {d1.id}className='body1'>Title:{d1.title}</li>)
      }
    </div>

            }
            </div>  
  )
}
export default Axios2;
