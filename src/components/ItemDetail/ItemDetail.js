import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({product}) => {

    const [items, setItems] = useState(1);

    const [productAdded, setProductAdded] = useState(false);

    const {addToCart} = useContext(CartContext);

    const rutaInicial = '../images/';
    
    function onAdd (product) {
        setProductAdded(true);
        setItems(items);
        addToCart(product, items);
    };

    return (
        <div className="ItemDetail-card">
            <div className="ItemDetail-base">
                <img src={rutaInicial + product.imagen} alt={product.tipo} width= '200px' height='250px'/>
                <div> 
                    {productAdded ? (
                        <>
                            <div><Link to='/'><button className="ItemCount-botonSeguirComprando">Seguir comprando</button></Link></div>
                            <div><Link to='/cart'><button className="ItemCount-botonFinalizarCompra">Finalizar compra</button></Link></div>
                        </>
                    )
                    : (
                        <>
                            <ItemCount stock= {product.stock} items= {items} setItems= {setItems}/>
                            <div>
                                <button onClick={() => onAdd(product)} className="ItemCount-botonAgregarProducto">Agregar al carrito</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="ItemDetail-extraInformation">
                <h3 className="ItemDetail-info">{product.marca}</h3>
                <h2 className="ItemDetail-info">Sticker {product.tipo}</h2>
                <h4 className="ItemDetail-info">Precio: ${product.precio}</h4>
                <div className="ItemDetail-promocion">{product.promocion}</div>
                <div>
                    <p className="ItemDetail-detalle"> Acabado: </p>
                    <p><button className="ItemDetail-button">{product.acabado}</button></p>
                </div>
                <div>
                    <p className="ItemDetail-detalle"> Talla: </p> 
                    <p><button className="ItemDetail-button">{product.talla}</button></p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
