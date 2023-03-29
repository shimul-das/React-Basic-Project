import React from 'react'

const Cosmatic = (props) => {
    // Here need Destucturing to remove long variable pass in element
    const {name,price,id}=props.cosmatic
  return (
    <div>
        <h2>Buy This:{name}</h2>
        <p>Only For:${price}</p>
        <p><small>It has a Id:{id}</small></p>
    </div>
  )
}

export default Cosmatic