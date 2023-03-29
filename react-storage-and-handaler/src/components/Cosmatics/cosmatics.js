import React from 'react'
import add, { multiply } from './utilities/calculate';
//import add from './utilities/calculate';

const Cosmatics = () => {
const first=55;
const second=30;
const total=add(first,second);
const total_m=multiply(first,second);
  return (
    <div>
        <h1>This is cosmatics component</h1>
        <p>Total: {total}</p>
        <p>Total: {total_m}</p>
    </div>
  )
}

export default Cosmatics