import { useState } from "react"

const ItemCount = ({stock, inicial, onAdd}) => {
    const [items, setItems] = useState (inicial)
    const suma = () => {if (items < stock) setItems (items + 1)}
    const resta = () => {if (items > inicial) setItems (items - 1)}
    const onAddActive = () => {if (items <= stock) onAdd (items)} 
    return (
        <>
        <div className="ItemCount-sumadorContenedor">
            <button onClick={resta} className="ItemCount-botonSuma">-</button>
            <input type="text" readOnly value={items} className="ItemCount-valorItem"/>
            <button onClick={suma} className="ItemCount-botonResta">+</button>
        </div>
        <div>
            <button onClick={onAddActive} className="ItemCount-botonAgregarProducto">Agregar al carrito</button>
        </div>
        </>
    );
}

export default ItemCount