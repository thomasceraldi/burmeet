import React from 'react';
import './NavBar.css';
import burmeetLogo from './img/burmeet-logo.png';
import CartWidget from './CartWidget.js';

export default function NavBar() {
    return (
        <div className='contenedorNavBar'>
            <div className='contenedorLogoLink'>
                <div className='logoMenu'>
                    <a href='./App.js'><img src={burmeetLogo} alt='logo de Burmeet' className='logo'/></a>
                </div>
                <div className='linksMenu'>
                    <ul>
                        <li><a href='.'>Catalogo</a></li>
                        <li><a href='.'>Quienes Somos</a></li>
                        <li><a href='.'>Contacto</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    );
};