import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Login from "../Login/Login";
import moment from "moment/moment";

const Cart = () => {

    const rutaInicial = '../images/';
    const {cart, clear, removeItem} = useContext(CartContext);
    
    let precioTotal = cart.reduce((precioTotalCart, product) => precioTotalCart + (product.precio*product.quantity), 0);
    
    const [order, setOrder] = useState({
        buyer: {
            name: '', 
            phone: '',
            email: '',
        },
        items: cart, 
        total: precioTotal,
        date: moment().format(),
    });

    const handleInputChange = (event) => {
        setOrder ({
            ...order, 
            buyer: {
                ...order.buyer,
                [event.target.name]: event.target.value,
            },
        });
    };

    const db = getFirestore();

    const createOrder = () => {
        const query = collection(db, 'orders');
        addDoc(query, order).then (({id}) => {
            console.log(id)
        })
        return (
            <Login name= {order.buyer.name} phone= {order.buyer.phone} email= {order.buyer.email} handleInputChange= {handleInputChange}/>
        );
    };
 
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
                                    <td><img src={rutaInicial + product.imagen} alt={product.tipo} width= '75px' height='100px'/></td>
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
                    <Link to='/logIn'><button onClick={() => createOrder()} className="Cart-botonFinalizarCompra">Finalizar Compra</button></Link>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <h1 className="Cart-titulo">NO HAY PRODUCTOS EN EL CARRITO DE COMPRAS</h1>
                <div><Link to='/'><button className="Cart-botonVolverInicio">Volver al Inicio</button></Link></div>
            </>
        );
    };  
};
 
export default Cart;