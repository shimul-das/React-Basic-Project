import React from 'react'
import './cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total=0;
    for(let product of cart){
      total= total+product.price
    }
  return (
    <div className='cart'>
        <h4>Order Summary</h4>
        <p className='cart-item'>Added Product:{cart.length}</p>
        <p className='cart-item'>Total Price:{total}</p>
        <p className='cart-item'>Total Shipping Charge:</p>
        <p className='cart-item'>Tax: </p>
        <p className='grand-total'>Grand Total: </p>

    </div>
  )
}

export default Cart