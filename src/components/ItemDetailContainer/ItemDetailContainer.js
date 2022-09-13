import Products from "../mockData";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({}); //asegura guardar el estado actual de product
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => { //se ejecuta una vez que se montó la promesa getItem
        setIsLoading(true);
        getItem.then((response) => { //una vez que se resuelve la promesa, ejecuta esta acción
            setProduct(response);
        })
        .finally(() => setIsLoading(false)); 
    }, [id]); 

    const getItem = new Promise ((resolve, reject) => { //muestra Producto luego de 2seg
        const ProductsFilter = Products.filter(product => product.id === parseInt(id))
        setTimeout(() => {
            resolve(ProductsFilter[0]); 
        }, 2000);
    });

    if (isLoading) {
        return <h2 className="ItemDetailContainer-msgWait">Cargando detalle del producto...</h2>
    }

    return (
        <>
            <ItemDetail item= {product}/>
        </>
    );   
    
    
};

export default ItemDetailContainer