import { useState } from "react"

const ItemCount = ({stock, inicial}) => {
    const [items, setItems] = useState (inicial)
    const suma = () => items < stock ? setItems (items + 1) : console.log('No hay mas stock')
    const resta = () => items > inicial ? setItems (items - 1) : console.log('No se admiten valores negativos')
    return (
        <div className="ItemCount-sumadorContenedor">
            <button onClick={suma} className="ItemCount-botonSuma">+</button>
            <input type="text" readOnly value={items} className="ItemCount-valorItem"/>
            <button onClick={resta} className="ItemCount-botonResta">-</button>
        </div>
    );
}

export default ItemCount