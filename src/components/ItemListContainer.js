import React, {useState} from "react";
import './ItemListContainer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';
import ItemCount from "./ItemCount";

export default function ItemListContainer({greeting}) {
    const[numeroCompraInicial, setNumeroCompraInicial] = useState(1);

    return (
        <div>
            <div className="contenedorItemList">
                <FontAwesomeIcon icon={faHamburger} className="burger"/>
                <p className="bienvenida">{greeting}</p>
                <FontAwesomeIcon icon={faHamburger} className="burger"/>
            </div>
            <ItemCount stock={5} initial={numeroCompraInicial} numeroCompras={setNumeroCompraInicial}/>
        </div>
    );
};