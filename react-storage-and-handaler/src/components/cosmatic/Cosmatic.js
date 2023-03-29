import React from 'react'
import { cartToDb, removeFromDb } from '../Cosmatics/utilities/fakedb'
import './cosmatic.css' 
const Cosmatic = (props) => {
    // Here need Destucturing to remove long variable pass in element
    const {name,price,id}=props.cosmatic
    const addtoProduct=(id)=>{
       cartToDb(id)
    }
    const removeCart=(id)=>{
       removeFromDb(id)
    }
    const addToCartWithParameter=()=>addtoProduct(id);
    const RemoveFromCartWithParameter=()=>removeCart(id);

  return (
    <div className='product'>
        <h2>Buy This:{name}</h2>
        <p>Only For:${price}</p>
        <p><small>It has a Id:{id}</small></p>
        <button onClick={addToCartWithParameter}>Add To Cart</button>
        <button onClick={()=>addtoProduct(id)}>Add To Cart: Short Cut Function</button>
        <button onClick={RemoveFromCartWithParameter}>Remove Product</button>
    </div>
  )
}

export default Cosmatic