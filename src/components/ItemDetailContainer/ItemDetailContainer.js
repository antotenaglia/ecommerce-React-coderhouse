// import Products from "../mockData";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({}); //asegura guardar el estado actual de product
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => { //se ejecuta una vez que se montó la promesa 
        getItem();
        setIsLoading(false); 
    }, [id]); 

    const getItem = () => { 
        const db = getFirestore(); //obtiene info de la base de datos
        const queryDoc = doc (db, 'items', id);
        getDoc(queryDoc).then ((response) => {
            setProduct({id: response.id, ...response.data()});
        });
    }    
    
    setTimeout(() => { //muestra Producto luego de 2seg
        getItem();
    }, 2000);
    
    if (isLoading) {
        return <h2 className="ItemDetailContainer-msgWait">Cargando detalle del producto...</h2>
    }

    return (
        <>
            <ItemDetail product= {product}/>
        </>
    );   
    
    
};

export default ItemDetailContainer