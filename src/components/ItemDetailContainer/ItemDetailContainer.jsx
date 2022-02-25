import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail/ItemDetail";
import {doc, getDoc} from 'firebase/firestore';
import {baseDatos} from '../../firebase';
import Spinner from '../../Spinner';

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState();
    const {productoId} = useParams();

    /*useEffect(() => {
        getItems().then((producto) => {
            const itemFiltrado = producto.find((i) => {return i.id === productoId});
            setProducto(itemFiltrado);
        });
    }, [productoId]);*/

    useEffect(()=>{
        const referenciaItemsId = doc(baseDatos, 'items', productoId);
        getDoc(referenciaItemsId).then((prod) => {
            if(prod.exists()){
                setProducto({id: prod.id, ...prod.data()});
            };
        });
    }, [productoId]);

    return (
        <div className='contenedorItemDetailContainer'>
            {!producto ? <Spinner /> : <ItemDetail item={producto}/>}
        </div>
    );
};