
const ItemCount = ({stock, items, setItems}) => {
    const suma = () => {if (items < stock) setItems (items + 1)}
    const resta = () => {if (items > 1) setItems (items - 1)}
    return (
        <>
            <div className="ItemCount-sumadorContenedor">
                <button onClick={resta} className="ItemCount-botonSuma">-</button>
                <input type="text" readOnly value={items} className="ItemCount-valorItem"/>
                <button onClick={suma} className="ItemCount-botonResta">+</button>
            </div>
        </>
    );
}

export default ItemCount;