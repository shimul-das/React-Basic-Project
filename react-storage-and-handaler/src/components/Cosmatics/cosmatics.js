import React, { useEffect, useState } from 'react'
import Cosmatic from '../cosmatic/Cosmatic';
import add, { multiply } from './utilities/calculate';
//import add from './utilities/calculate';

const Cosmatics = () => {
    //generate json data from json-generte.com
    // now we will load data using fetch
    //To fetch data we have to load data for this reason we have to declare state.
    //as we will load data from array thats why use state will be empy array.
const [cosmatics,setcosmatics]=useState([])
//for load we have to use useEffect
//make free mock api using online tool
useEffect(()=>{
    fetch('dataset.json')
    .then(res=>res.json())
    .then(data=>setcosmatics(data))
},[])
  return (
    <div>
        <h1>This is cosmatics component</h1>
        {
            cosmatics.map(cosmatic=><Cosmatic key={cosmatic.id} cosmatic={cosmatic}></Cosmatic>)
        }
    </div>
  )
}

export default Cosmatics