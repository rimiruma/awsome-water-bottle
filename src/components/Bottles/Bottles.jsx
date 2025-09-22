import { use } from "react";
import './Bottles.css'
import Bottle from "../Bottle/Bottle";
import { useState } from "react";

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles);

    const handleAddToCart = (bottle) => {
        console.log('bottle will be added to be cart', bottle);
        
    }
    

    return (
        <div>
           <h3>Bottles: {bottles.length}</h3>
           <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
            }
            </div> 
        </div>
    );
};

export default Bottles;