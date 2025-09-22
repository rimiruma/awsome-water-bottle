import './bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle);
    const { img, name, price, stock } = bottle;
    
    return (
        <div className="card bottle">
           <img src={img} alt="" /> 
           <h3>{name}</h3>
           <p>${price}</p>
           <p>{stock}remaining</p>
           <button onClick={() => handleAddToCart(bottle)}>By Naw</button>
        </div>
    );
};

export default Bottle;