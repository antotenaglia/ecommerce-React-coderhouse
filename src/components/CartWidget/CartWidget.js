import Carrito from '../../assets/images/carrito.png';
import { CartContext } from '../../context/CartContext';
import { useContext } from "react";
import { Link } from 'react-router-dom';

const ImgCarrito = () => {

    const {cart} = useContext(CartContext);

    let cantidadTotal = cart.reduce((cantidadTotalCart, product) => cantidadTotalCart + product.quantity, 0);

    return (
        <Link to='/cart'> 
            <div className='CartWidget-contenedor'>
                <img src={Carrito} alt="carrito" className="CartWidget-imgCarrito"/>
                {(cantidadTotal > 0) && (
                    <span className='CartWidget-cantidadCarrito'>{cantidadTotal}</span>
                )}
            </div>
        </Link>
    );     
};

export default ImgCarrito;

