import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    const inicial = 1;
    const onAddActive = (items) => {alert (`Agregaste ${items} producto/s al carrito`)};
    return (
        <div className="ItemDetail-card">
            <div className="ItemDetail-base">
                <img src={item.imagen} alt={item.tipo} width= '250px' height='300px'/>
                <ItemCount 
                    stock= {item.stock} 
                    inicial= {inicial} 
                    onAdd= {onAddActive}
                />
            </div>
            <div className="ItemDetail-extraInformation">
                <h3 className="ItemDetail-info">{item.marca}</h3>
                <h2 className="ItemDetail-info">Sticker {item.tipo}</h2>
                <h4 className="ItemDetail-info">Precio: ${item.precio}</h4>
                <div className="ItemDetail-promocion">{item.promocion}</div>
                <div>
                    <p className="ItemDetail-detalle"> Acabado: </p>
                    <p><button className="ItemDetail-button">{item.acabado}</button></p>
                </div>
                <div>
                    <p className="ItemDetail-detalle"> Talla: </p> 
                    <p><button className="ItemDetail-button">{item.talla}</button></p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
