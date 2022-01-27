import React from 'react';
import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export default function CartWidget(){
    return (
        <div className='contenedorCartWidget'>
            <div>
                <button type="button">
                    <FontAwesomeIcon icon={faShoppingCart} className='carrito'/>
                </button>
            </div>
            <div>
                <p className='contadorCompras'>2</p>
            </div>
        </div>
    );
};