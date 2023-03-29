import React from 'react'
import './product.css'

const Product = (props) => {
const {img,name,seller,price,quantity,rattings}=props.product;
return (
<div className='product'>
    <img src={img} alt="" />
    <div className='product-info'>
        <h5 className='product-name'>{name}</h5>
        <p className='product-price'>Price: ${price}</p>
        <p className='product-manufacturer'>Manufacturer: {seller}</p>
        <p className='product-rattig'>Rattings:{rattings}Stars</p>
    </div>
    <button className='btn-cart'>Add To Cart</button>

</div>
)
}

export default Product