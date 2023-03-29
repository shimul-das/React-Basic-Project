import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './shop.css'
const Shop = () => {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
return (
<div className='shopContainer'>
    <div className='productContainer'>
        {
            products.map(product=><Product key={product.id} product={product}></Product>)
        }
    </div>
    <div className='cartContainer'>
        <h4>Order Summary</h4>
    </div>

</div>
)
}

export default Shop