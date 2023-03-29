//use local storage manage card data.
const cartToDb=(id)=>{
    const quantity=localStorage.getItem(id);
    if(quantity){
        console.log('Item already exit');
        const newquanty=parseInt(quantity)+1;
        localStorage.setItem(id,newquanty);
    }
    else{
        console.log('new item added')
        localStorage.setItem(id,1)
    }
    
}

export {cartToDb}