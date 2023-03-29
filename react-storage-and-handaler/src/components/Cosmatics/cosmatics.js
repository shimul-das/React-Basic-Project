import React from 'react'
import Cosmatic from '../cosmatic/Cosmatic';
import add, { multiply } from './utilities/calculate';
//import add from './utilities/calculate';

const Cosmatics = () => {
    //generate json data 
const cosmatics=[
    {
      "id": "6423fc88778ef0c9d649e365",
      "price": 159,
      "name": "Newton Hodges"
    },
    {
      "id": "6423fc88ff3ac5747d3bf86d",
      "price": 261,
      "name": "Frances Chapman"
    },
    {
      "id": "6423fc88b92236bd15bc21c1",
      "price": 377,
      "name": "Ginger Key"
    },
    {
      "id": "6423fc8889daf190420e8300",
      "price": 370,
      "name": "Merle Donovan"
    },
    {
      "id": "6423fc88a00616d418d64659",
      "price": 158,
      "name": "Audra Garrison"
    },
    {
      "id": "6423fc88389283b3609bee53",
      "price": 93,
      "name": "Sharron Mcpherson"
    }
  ]
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