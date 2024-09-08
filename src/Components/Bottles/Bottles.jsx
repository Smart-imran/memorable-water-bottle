import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart ,setCart] = useState([]);

    useEffect(() => {

        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    const handleAddToCart = (bottle) =>{
        const newCart = [...cart,bottle];

        setCart(newCart);
    }

    return (
        <div>
            <h4>Bottles Available: {bottles.length} </h4>
            <h3>Cart Bottle Add: {cart.length}</h3>

            <div className='bottle-cointainer'>
                {
                    bottles.map(bottle => <Bottle

                        key={bottle.id}
                        bottle1={bottle}
                        handleAddToCart = {handleAddToCart}


                    ></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;