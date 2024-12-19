import React, { useEffect, useState } from 'react'
import axios from "axios"
function Quiz() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
    const res = await axios.get('http://localhost:3000/')
    setData(res.data);
    console.log(res.data)
    } catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    getData();
  },[])
  return (
    <>  
        <h1>{data.length > 0 ? data[11].name: "getting"}</h1>
        <div>Home</div>
    </>
    
  )
}

export default Quiz