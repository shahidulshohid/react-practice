const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLs = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLs = id => {
    const cart = getStoredCart()
    cart.push(id)
    // save to local storage
    saveCartToLs(cart)
}

const removeFromLs = id => {
    const cart = getStoredCart()
    //removing every id
    const remaining = cart.filter(idx => idx.id !== id)
    saveCartToLs(remaining)
}

export {addToLs, getStoredCart, removeFromLs}