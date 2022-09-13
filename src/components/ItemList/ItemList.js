
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({lista}) => {
    return (
        <div className="ItemList-card">
            {lista.map((product) => (
                <div key= {product.id}>
                    <Link to= {'/item/' + product.id}>   
                        <Item 
                            tipo= {product.tipo}
                            marca= {product.marca}
                            precio= {product.precio}
                            imagen= {product.imagen}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;