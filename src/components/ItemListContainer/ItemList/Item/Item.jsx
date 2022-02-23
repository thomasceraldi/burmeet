import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

export default function Item({item}){
    return (
        <div className='contenedorItems'>
            <Link to={`/producto/${item.id}`}>
                <div className='imagenProducto'>
                    <img src={item.imagen} alt="hamburguesa"/>
                </div>
                <div className='tituloProducto'>
                    <h2>{item.titulo}</h2>
                </div>
                <div className='precioProducto'>
                    <p>{'$'+new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                </div>
            </Link>
        </div>
    );
};