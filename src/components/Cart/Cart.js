
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
 
const Cart = () => {
 
    const {cart, clear, removeItem} = useContext(CartContext);

    let precioTotal = cart.reduce((precioTotalCart, product) => precioTotalCart + (product.precio*product.quantity), 0);
 
    if (cart.length > 0) {
        return (
            <div>
                <h1 className="Cart-titulo">CARRITO DE COMPRAS</h1>
                {cart.map((product) => (
                    <div key= {product.id} className="Cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="Cart-column">PRODUCTO</th>
                                    <th className="Cart-column">PRECIO UNITARIO</th>
                                    <th className="Cart-column">CANTIDAD</th>
                                    <th className="Cart-column">SUBTOTAL</th>
                                    <th className="Cart-column"></th>
                                    <th className="Cart-column"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sticker - {product.tipo} {product.marca}</td>
                                    <td>${product.precio}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.precio*product.quantity}</td>
                                    <td><img src={product.imagen} alt={product.tipo} width= '75px' height='100px'/></td>
                                    <td><button className="Cart-butonBorrarProducto" onClick={() => removeItem (product.id)}> Borrar producto </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
                <div className="Cart-total">
                    <h3>TOTAL DEL PEDIDO: $ {precioTotal} </h3>
                </div>
                <div>
                    <button onClick={clear} className="Cart-botonLimpiarCarrito">Limpiar Carrito</button>
                    <button className="Cart-botonFinalizarCompra">Finalizar Compra</button>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <h1 className="Cart-titulo">NO HAY PRODUCTOS EN EL CARRITO DE COMPRAS</h1>
                <div><Link to='/'><button className="Cart-botonVolverInicio">Volver al Inicio</button></Link></div>
            </>
        )
    }    
}
 
export default Cart