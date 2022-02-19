import React, {useContext} from 'react';
import './CartDetail.css';
import {CartContext} from '../../../context/CartContext';

export default function CartDetail({itemCartDetail}){
    const {removeToCart} = useContext(CartContext);

    return (
        <div className='contenedorItemCart'>
            <div className='imagenProductoCart'>
                <img src={itemCartDetail.imagen} alt="hamburguesa"/>
            </div>
            <div className='tituloProductoCart'>
                <h2>{itemCartDetail.titulo}</h2>
            </div>
            <div className='contenedorPrecioCantidadCart'>
                <div className='precioProductoCart'>
                    <p>{'$'+new Intl.NumberFormat("de-DE").format(itemCartDetail.precio * itemCartDetail.cantidad)}</p>
                </div>
                <div className='cantidadProductoCart'>
                    <p>cantidad: {itemCartDetail.cantidad}</p>
                </div>
            </div>
            <button onClick={() => removeToCart(itemCartDetail.id)} className='botonEliminarProductoCarrito'>Eliminar del carrito</button>
        </div>
        // la funcion de callback { () => } se agrega para que no se dispare automaticamente y el articulo no se borre recien se carga el componente, sino que se espera al click
    );
};