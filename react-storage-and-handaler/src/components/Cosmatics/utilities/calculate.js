const add =(first,second)=>{
    return first+second;
}
export default add;
// there are two way thats way we ca return 
//when in a utilites there are many function that need multple return. there we have to use another way.
const multiply=(first, second)=>{
    return first*second;
}
const subtruction=(first, second)=>{
    return first-second;
}
export{add, multiply, subtruction}