
const ItemDetail = ({item}) => {
  return (
    <div className="ItemDetail-card">
        <div>
            <img src={item.imagen} alt={item.tipo} width= '350px' height='400px'/>
        </div>
        <div className="ItemDetail-extrainformation">
            <h3 className="ItemDetail-info">Sticker {item.tipo} - {item.marca}</h3>
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
