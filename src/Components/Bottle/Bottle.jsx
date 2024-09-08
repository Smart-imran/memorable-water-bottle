
import './Bottle.css'


const Bottle = ({bottle1,handleAddToCart}) => {
    const {name,img,price} = bottle1
    return (
        <div className="bottle">
            <h4>Bottle Name :{name}</h4>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(bottle1)}>Purchase</button>
        </div>
    );
};

export default Bottle;