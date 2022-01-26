import React from 'react';
import './NavBar.css';
import burmeetLogo from './img/burmeet-logo.png';

export default function NavBar() {
    return (
        <div className='contenedorNavBar'>
            <div className='logoMenu'>
                <a href='./App.js'><img src={burmeetLogo} alt='logo de Burmeet' /></a>
            </div>
            <div className='linksMenu'>
                <ul>
                    <li><a href='.'>Catalogo</a></li>
                    <li><a href='.'>Quienes Somos</a></li>
                    <li><a href='.'>Contacto</a></li>
                </ul>
            </div>
        </div>
    );
};