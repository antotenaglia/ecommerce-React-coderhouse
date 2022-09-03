
const Item = ({tipo, marca, precio, imagen}) => {
    return (
        <div className="Item-card">    
            <img src={imagen} alt={tipo} width= '150px' height='200px'/>
            <h2>Sticker {tipo} - {marca}</h2>
            <h3>Precio: ${precio}</h3>
        </div>
    )
}

export default Item;