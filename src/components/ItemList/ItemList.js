
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({lista}) => {
    return (
        <div>
            {lista.map((product) => (
                // el id va en el padre
                <Link to={'/detail/' + product.id} key={product.id}> 
                    <div>   
                        <Item 
                            tipo={product.tipo}
                            marca={product.marca}
                            precio={product.precio}
                            imagen={product.imagen}
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ItemList;