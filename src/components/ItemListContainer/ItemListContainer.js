import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Greeting from "../Greeting/Greeting";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

    const [productList, setProductList] = useState([]); //asegura guardar el estado actual de productList
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => { //se ejecuta una vez que se montó la promesa 
        getProducts();
    }, [categoryId]); 

    const getProducts = () => {
        const db = getFirestore(); //obtiene info de la base de datos
        const queryBase = collection(db, 'items');
        const querySnapshot = categoryId ? query(queryBase, where('categoryId','==', categoryId)) : queryBase

        setTimeout(() => { //muestra Productos luego de 2seg
            setIsLoading (true);      
            getDocs(querySnapshot).then ((response) => {
                const data = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()};
                })
                setProductList(data);
            });
            setIsLoading(false);
        }, 2000); 
    }

    if (isLoading) {
        return <h2 className="ItemListContainer-msgWait">Cargando productos...</h2>
    }

    return (
        <>
            <Greeting greeting= "STICKERZONE"/>
            <h2>+10.000 stickers en un sólo lugar!</h2>
            <ItemList lista={productList}/>
        </>
    );     
};

export default ItemListContainer