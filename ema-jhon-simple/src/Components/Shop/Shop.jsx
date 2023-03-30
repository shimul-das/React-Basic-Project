import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './shop.css'
const Shop = () => {
    const [products,setproducts]=useState([])
    const [cart,setcart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    const handleAddtoCart=(product)=>{
        const newCart=[...cart,product]
        setcart(newCart)
        }
return (
<div className='shopContainer'>
    <div className='productContainer'>
        {
            products.map(product=><Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
        }
    </div>
    <div className='cartContainer'>
        <Cart cart={cart}></Cart>
    </div>

</div>
)
}

export default Shop