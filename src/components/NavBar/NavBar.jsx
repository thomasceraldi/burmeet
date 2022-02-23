import React from 'react';
import './NavBar.css';
import {Link, NavLink} from 'react-router-dom';
import burmeetLogo from '../../img/burmeet-logo.png';
import CartWidget from './CartWidget/CartWidget';

export default function NavBar() {
    return (
        <div className='contenedorNavBar'>
            <div className='contenedorLogoLink'>
                <Link to={'/'} className='logoLink'>
                    <div className='logoMenu'>
                        <img src={burmeetLogo} alt='logo de Burmeet' className='logo'/>
                    </div>
                </Link>
                <nav className='linksMenu'>
                    <ul>
                        <li><NavLink to={'/secciones/quienesSomos'}>Quienes Somos</NavLink></li>
                        <li><NavLink to={'/secciones/contacto'}>Contacto</NavLink></li>
                    </ul>
                    <p>/</p>
                    <ul className='filtrosCategoria'>
                        <li><NavLink to={'/categoria/simple'}>Simples</NavLink></li>
                        <li><NavLink to={'/categoria/doble'}>Dobles</NavLink></li>
                        <li><NavLink to={'/categoria/veggie'}>Veggies</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    );
};