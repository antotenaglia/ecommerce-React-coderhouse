
const ItemCount = ({stock, items, setItems}) => {
    const onAdd = () => {if (items < stock) setItems (items + 1)}
    const onRemove = () => {if (items > 1) setItems (items - 1)}
    return (
        <>
            <div className="ItemCount-sumadorContenedor">
                <button onClick={onRemove} className="ItemCount-botonSuma">-</button>
                <input type="text" readOnly value={items} className="ItemCount-valorItem"/>
                <button onClick={onAdd} className="ItemCount-botonResta">+</button>
            </div>
        </>
    );
}

export default ItemCount