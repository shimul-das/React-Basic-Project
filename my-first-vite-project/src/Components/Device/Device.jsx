import React from 'react'
import Devicedetails from '../Devicedetails/Devicedetails'

const Device = (props) => {
  return (
    <div>
        <h1>My Device Name:{props.name}</h1>
        <h4>Price:{props.price}</h4>
        <Devicedetails></Devicedetails>
    </div>
  )
}

export default Device