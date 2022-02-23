import React, {useContext} from 'react';
import './CartWidget.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {CartContext} from '../../../context/CartContext';

export default function CartWidget(){
    const {sumarItems} = useContext(CartContext);

    return (
        <div className='contenedorCartWidget'>
            <div className='contenedorCarrito'>
                <Link to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} className='carrito'/></Link>
            </div>
            <div>
                <p className='contadorCompras'>{sumarItems() !== 0 ? sumarItems() : 'Vacio'}</p>
            </div>
        </div>
    );
};