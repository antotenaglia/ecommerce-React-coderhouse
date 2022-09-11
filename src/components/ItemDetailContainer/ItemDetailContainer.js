import Products from "../mockData";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState([]); //asegura guardar el estado actual de product

    useEffect (() => { //se ejecuta una vez que se montó la promesa getItem
        getItem.then((response) => { //una vez que se resuelve la promesa, ejecuta esta acción
            setProduct(response);
        }); 
    }); 

    const getItem = new Promise ((resolve, reject) => { //muestra Producto luego de 2seg
            const ProductsFilter = Products.filter(product => product.id === id)  
            setTimeout(() => {
                resolve(ProductsFilter[0]); 
            }, 2000);
        });

    return (
        <>
            <ItemDetail item={product}/>
        </>
    );   
    
    
};

export default ItemDetailContainer