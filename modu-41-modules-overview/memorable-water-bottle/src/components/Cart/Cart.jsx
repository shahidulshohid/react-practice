import PropTypes, { func } from 'prop-types';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(cart)
    return (
        <div>
            <h5>Cart: {cart.length}</h5>
            <div className="cart-container">
                {
                    cart.map(bottle =>
                        <div key={bottle.id}>
                            <img src={bottle.img}></img>
                            <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove Cart</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart:func.isRequired
}

export default Cart;