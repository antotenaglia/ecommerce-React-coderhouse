import { useState } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState ([]);

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const addToCart = (product, quantity) => {
        if (isInCart (product.id)) {
            Swal.fire('El producto ya se encuentra agregado al Carrito');  
        } else {
            setCart([...cart, {...product, quantity}]);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al Carrito',
                showConfirmButton: false,
                timer: 1500
            });
        };
    };

    const removeItem = (productId) => {
        Swal.fire({ 
            title: '¿Está seguro de borrar este producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar producto'
        }).then((result) => {  
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'El producto ha sido eliminado',
                    'success'
                )
                setCart(cart.filter((product) => product.id !== productId));
            };
        });
    };

    const clear = () => {
        Swal.fire({ 
            title: '¿Está seguro de borrar todos los productos del Carrito de Compras?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, limpiar Carrito de Compras'
        }).then((result) => {  
            if (result.isConfirmed) {
                setCart([]);
            };
        });
    };

    return (
        <CartContext.Provider value={{cart, isInCart, addToCart, clear, removeItem}}>   
            {children}    
        </CartContext.Provider>   
    );
};
 