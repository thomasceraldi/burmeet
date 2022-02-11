import React from 'react';
import './ItemDetail.css';

export default function ItemDetail({item}){
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
            <div>
                <button className='botonComprar'>Comprar</button>
            </div>
        </div>
    );
};