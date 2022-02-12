import React, {useState} from 'react';
import './ItemDetail.css';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';

export default function ItemDetail({item}){
    const[itemCount, setItemCount] = useState();

    function onAddTime(newItemCount){
        setItemCount(newItemCount);
    };

    return (
        <div className='contenedorItemFiltrado'>
            <div className='imagenProductoFiltrado'>
                <img src={item.imagen} alt="hamburguesa"/>
            </div>
            <div className='tituloProductoFiltrado'>
                <h2>{item.titulo}</h2>
            </div>
            <div className='descripcionProductoFiltrado'>
                <h3>{item.descripcion}</h3>
            </div>
            <div className='precioProductoFiltrado'>
                <p>$ {new Intl.NumberFormat("de-DE").format(item.precio)}</p>
            </div>
            {!itemCount ? <ItemCount stock={10} initial={1} onAdd={onAddTime}/> : <div className='contenedorIrCarrito'><Link to='/cart' className='botonIrCarrito'>Ir al carrito</Link></div>}
        </div>
    );
};