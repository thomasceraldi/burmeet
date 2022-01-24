import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className='contenedorNavBar'>
            <div className='logoMenu'>
                <a href='./App.js'>Burmeet</a>
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