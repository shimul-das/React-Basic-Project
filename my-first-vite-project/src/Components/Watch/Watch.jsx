import React, { useEffect, useState } from 'react'

const Watch = () => {
    const [steps,setSteps]=useState(0);
    const increaseCount=(increaseCount)=>{
      const newStep=steps+1
      setSteps(newStep);
      console.log('neswSteps')//in our ui will show data 1 is more because here data is not updated. to see current value

      useEffect(()=>{
        console.log(steps)
      },[])
    }
  return (
    <div>
        <h1>This is my smart watch</h1>
        <p>Steps:{steps}</p>
        <button onClick={increaseCount}>De Dour....</button>
    </div>
  )
}

export default Watch