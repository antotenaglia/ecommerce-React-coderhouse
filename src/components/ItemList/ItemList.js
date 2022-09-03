
import Item from "../Item/Item";

const ItemList = ({lista}) => {
    return (
        <div>
            {lista.map((product) => (
                <div key={product.id}>   
                    <Item 
                        tipo={product.tipo}
                        marca={product.marca}
                        precio={product.precio}
                        imagen={product.imagen}
                    />
                </div>
            ))}
        </div>
    );
};

export default ItemList;