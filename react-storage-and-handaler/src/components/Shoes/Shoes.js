import React from 'react'
import { subtruction } from '../Cosmatics/utilities/calculate';

const Shoes = () => {
    const a=55;
    const b=33;
    const sub=subtruction(a,b);
  return (
    <div>
        <h1>This is shoes componenet</h1>
        <p>The subtraction:{sub}</p>
    </div>
  )
}

export default Shoes