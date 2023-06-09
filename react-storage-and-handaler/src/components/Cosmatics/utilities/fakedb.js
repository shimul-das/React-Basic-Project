//use local storage manage card data.
const cartToDb=(id)=>{
    let shoppingCart;
    localStorage.setItem(id,JSON.stringify(shoppingCart))
    //get the shopping cart
    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
       shoppingCart=JSON.parse(storedCart);
    }
    else{
        shoppingCart={};
    }
    //add quantity
    const quantity=shoppingCart[id]    
    if(quantity){
        console.log('Item already exit');
        const newquanty=quantity+1;
        shoppingCart[id]=newquanty
        // localStorage.setItem(id,newquanty);
    }
    else{
        shoppingCart[id]=1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

    // if(quantity){
    //     console.log('Item already exit');
    //     const newquanty=parseInt(quantity)+1;
    //     localStorage.setItem(id,newquanty);
    // }
    // else{
    //     console.log('new item added')
    //     localStorage.setItem(id,1)
    // }
    
}

const removeFromDb=(id)=>{
        //get the shopping cart
        const storedCart=localStorage.getItem('shopping-cart');
        if(storedCart){
           const shoppingCart=JSON.parse(storedCart);
           if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
           }
        }

}

const deleteShoppingCart=()=>{
    localStorage.removeItem('shoping-cart')
}
const getTotalPrice=(products)=>{
const reducer=(previous,current)=>previous+current.price;
const total=products.reduce(reducer,0);
return total;
}

export {cartToDb, removeFromDb,deleteShoppingCart,getTotalPrice}