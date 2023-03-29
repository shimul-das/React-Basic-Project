import React from 'react'
import './cosmatic.css' 
const Cosmatic = (props) => {
    // Here need Destucturing to remove long variable pass in element
    const {name,price,id}=props.cosmatic
    const addtoProduct=(id)=>{
        console.log('Product Added',id)
    }
    const addToCartWithParameter=()=>addtoProduct(id);
  return (
    <div className='product'>
        <h2>Buy This:{name}</h2>
        <p>Only For:${price}</p>
        <p><small>It has a Id:{id}</small></p>
        <button onClick={addToCartWithParameter}>Add To Cart</button>
        <button onClick={()=>addtoProduct(id)}>Add To Cart: Short Cut Function</button>
    </div>
  )
}

export default Cosmatic