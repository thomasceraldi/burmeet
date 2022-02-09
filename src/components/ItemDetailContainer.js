import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import {getItems} from './api/getItems';
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getItems().then((producto) => {
            const itemFiltrado = producto.find((i) => i.id === "classic");
            setProducto(itemFiltrado);
        });
    }, []);

    return (
        <div className='contenedorItemDetailContainer'>
            {producto.id === "classic" ? <ItemDetail item={producto}/> : <div className="contenedorCargando"><p className='cargando'>Cargando...</p></div>}
        </div>
    );
};