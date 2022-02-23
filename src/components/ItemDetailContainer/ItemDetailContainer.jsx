import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';
import {getItems} from '../../api/getItems';
import ItemDetail from "./ItemDetail/ItemDetail";

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState();
    const {productoId} = useParams();

    useEffect(() => {
        getItems().then((producto) => {
            const itemFiltrado = producto.find((i) => {return i.id === productoId});
            setProducto(itemFiltrado);
        });
    }, [productoId]);

    return (
        <div className='contenedorItemDetailContainer'>
            {!producto ? <div className="contenedorCargando"><p className='cargando'>Cargando...</p></div> : <ItemDetail item={producto}/>}
        </div>
    );
};