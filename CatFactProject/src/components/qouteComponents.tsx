import React, { useEffect, useState } from 'react'
import axios from 'axios'



const qouteComponents = () => {
    const[qoute, setQoute] = useState('')

    useEffect(()=> {
        axios.get('https://catfact.ninja/fact').then((res)=>{
        setQoute(res.data)});
 },[]
)
console.log(qoute)
    
  return (
    <div>
      {qoute.fact}
      <br />
      {qoute.length}
    </div>
  )
}

export default qouteComponents
