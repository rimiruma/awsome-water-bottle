import { use, useEffect } from "react";
import './Bottles.css'
import Bottle from "../Bottle/Bottle";
import { useState } from "react";
import { addToStoredCart, getStoreCart } from "../../utilities/localStorage";

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles);

    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => id === id)
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);
        
    }, [bottles])

    const handleAddToCart = (bottle) => {
        // console.log('bottle will be added to be cart', bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save the bottle id in the storage
        addToStoredCart(bottle.id)
        
    }
    

    return (
        <div>
           <h3>Bottles: {bottles.length}</h3>
           <p>Added to cart: {cart.length}</p>
           <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
            }
            </div> 
        </div>
    );
};

export default Bottles;