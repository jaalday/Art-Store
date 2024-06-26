
import { useContext } from "react"
import { ShopContext } from "../Components/Shop-context"
import { products } from "./Paintings"



export const Cart = () => {

    const {cartItems, removeFromCart, addToCart} = useContext(ShopContext);



    return(
        <>
        <h1>Cart</h1>
        <div>
        {products.map((product) => {
            if (cartItems[product.id] > 0) {
                return (
                   
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <img className="product-image" src={product.image} alt={product.name}/>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {cartItems[product.id]}</p>
                        <div className="countHandler">
                            <button className="minus" onClick={() => removeFromCart(product.id)}>-</button>
                            <button className="plus" onClick={() => addToCart(product.id)}>+</button>
                        </div>
                    </div>
                )
            }
        })}
        </div>
     
 
      
        
        
        </>
       
    )
}


export default Cart