import Products from "../mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Greeting from "../Greeting/Greeting";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]); //asegura guardar el estado actual de productList
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => { //se ejecuta una vez que se montó la promesa getProducts
        setIsLoading(true);
        getProducts.then((response) => { //una vez que se resuelve la promesa, ejecuta esta acción
            setProductList(response);
        })
        .finally(() => setIsLoading(false)); 
    }, [categoryId]); 

    const getProducts = new Promise ((resolve, reject) => { //muestra Productos luego de 2seg
        setTimeout(() => {
            if (categoryId) {
                resolve(Products.filter(product => product.categoryId === categoryId))
            }
            else {
                resolve(Products);
            }}, 2000);
        });

    if (isLoading) {
        return <h2 className="ItemListContainer-msgWait">Cargando productos...</h2>
    }

    return (
        <>
            <Greeting greeting= "¡BIENVENIDO A STICKERZONE!"/>
            <h2>El lugar donde encontrarás los mejores stickers</h2>
            <ItemList lista={productList}/>
        </>
    );     
};

export default ItemListContainer