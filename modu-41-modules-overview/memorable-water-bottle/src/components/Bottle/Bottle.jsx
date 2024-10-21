
import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle)
    const {name, img, price} = bottle
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <p>
                <img src={img} alt="" />
            </p>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired,
}

export default Bottle;