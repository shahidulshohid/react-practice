import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart, removeFromLs } from "../../utilties/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] =useState([])


    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
    }

    const handleRemoveFromCart = id => {
        //visual cart remove
        const remaining = cart.filter(bottle => bottle.id !== id)
        setCart(remaining)
        //remove from ls
        removeFromLs(id)
    }

    useEffect(()=>{
        fetch('Bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    //load cart from local storage
    useEffect(()=> {
        // console.log('call the use effect',bottles.length)
        if(bottles.length){
            const storedCart = getStoredCart()
            // console.log(storedCart)
            const saveCart = []
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            // console.log('all save cart', saveCart)
            setCart(saveCart)
        }
    }, [bottles])
    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
            {
                bottles.map((bottle)=><Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;