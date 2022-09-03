import Products from "../mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]); //asegura guardar el estado actual de productList

    useEffect (() => { //se ejecuta una vez que se montó la promesa getProducts
        getProducts.then((response) => { //una vez que se resuelve la promesa, ejecuta esta acción
            setProductList(response);
        }); 
    }); 

    const getProducts = new Promise ((resolve, reject) => { //muestra Productos luego de 2seg
            setTimeout(() => {
                resolve(Products);
            }, 2000);
        });

    return (
        <>
            <ItemList lista={productList}/>
        </>
    );     
};

export default ItemListContainer