import  { createContext, useState } from 'react';
// import { products } from '../Store';


export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < products.length + 1; i++) {
        cart[[i]] = 0;
    }
    return cart;
}



export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());


    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}));

    };
    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}));
    }
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
    }
    console.log(cartItems, "cartItems");

    return   <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
       
    
}