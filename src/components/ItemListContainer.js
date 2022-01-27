import React from "react";
import './ItemListContainer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';

export default function ItemListContainer({greeting}) {
    return (
        <div className="contenedorItemList">
            <FontAwesomeIcon icon={faHamburger} className="burger"/>
            <p className="bienvenida">{greeting}</p>
            <FontAwesomeIcon icon={faHamburger} className="burger"/>
        </div>
    );
};