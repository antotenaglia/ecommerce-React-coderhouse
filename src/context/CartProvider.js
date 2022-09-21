import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState ([]);

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const addToCart = (product, quantity) => {
        if (isInCart (product.id)) {
            alert ('El producto ya se encuentra agregado al Carrito')
        }
        else {
            setCart([...cart, {...product, quantity}])
            alert (`Agregaste ${quantity} producto/s al carrito`)
        }
    }

    const removeItem = (productId) => {
        let newCart = [];
        cart.forEach((product) => {
            if (product.id !== productId) {
                newCart.push(product)
            }
        });
        setCart(newCart);
    }


    const clear = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addToCart, clear, removeItem}}>   
            {children}    
        </CartContext.Provider>   
    )
}
 