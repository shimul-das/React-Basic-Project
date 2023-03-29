import React from 'react'
import Cosmatic from '../cosmatic/Cosmatic';
import add, { multiply } from './utilities/calculate';
//import add from './utilities/calculate';

const Cosmatics = () => {
const cosmatics=[
    {id: 1, name: "alta", price: 110},
    {id: 2, name: "Sunu", price: 200},
    {id: 3, name: "Churi", price: 250},
    {id: 4, name: "Ciruni", price: 450},
    {id: 5, name: "Nailpoplish", price: 450},
    {id: 6, name: "Kajol", price: 550},
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