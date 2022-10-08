import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({}); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => { 
        getItem();
    }, [id]); 

    const getItem = () => { 
        const db = getFirestore(); 
        const queryDoc = doc (db, 'items', id);
        getDoc(queryDoc).then ((response) => {
            setProduct({id: response.id, ...response.data()});
        });
    }; 
    
    setTimeout(() => { 
        setIsLoading(true);
        getItem();
        setIsLoading(false); 
    }, 2000);
    
    if (isLoading) {
        return <h2 className="ItemDetailContainer-msgWait">Cargando detalle del producto...</h2>
    };

    if (product.marca) {
        return (
            <>
                <ItemDetail product= {product}/>
            </>
        );    
    } else {
        return ( 
            <>
                <h2 className="ItemDetailContainer-msgError">El producto que está buscando no existe</h2>
                <div><Link to='/'><button className="Cart-botonVolverInicio">Volver al Inicio</button></Link></div>
            </>
        );
    };
    

};

export default ItemDetailContainer;