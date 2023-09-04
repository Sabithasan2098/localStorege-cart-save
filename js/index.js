// get-data-from-customer----------
const btnClick = () =>{
    const identityName = document.getElementById("Identity")
    const quentitytype = document.getElementById("Quentity")
    const identity = identityName.value;
    const quentity = quentitytype.value;
    identityName.value ="";
    quentitytype.value ="";
    data(identity,quentity);
    saveProductsLocalStorege(identity, quentity)
}
// show-data-in-display--------
const data = (identity,quentity) =>{
    const ul = document.getElementById('cart-container')
    const li = document.createElement('li')
    li.innerText = `${identity} : ${quentity}`
    ul.appendChild(li);
}
// add-to-cart-like-localStorage------
const getShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
// save-data-to-localStorage-----
const saveProductsLocalStorege = (identity , quentity) => {
    const cart = getShoppingCart();
    cart[identity] = quentity;
    const cartStringifyed = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringifyed)
    
}
// display-localStorage-data----------
const displayProductFromLocalStorege = () =>{
    const saveCart = getShoppingCart()
    for(const identity in saveCart){
        const product = saveCart[identity]
        console.log(identity, product)
        data(identity , product)
    }
}
displayProductFromLocalStorege()