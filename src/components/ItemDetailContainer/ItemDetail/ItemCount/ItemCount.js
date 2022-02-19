import React, { useState } from "react";
import './ItemCount.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from "@fortawesome/free-solid-svg-icons";


export default function ItemCount({stock, initial, onAdd}) {
    const [itemCounter, setItemCounter] = useState(initial);
    
    function sumar(){
        if(itemCounter < stock) {
            setItemCounter(itemCounter + 1);
        };
    };

    function restar(){
        if(itemCounter > 1) {
            setItemCounter(itemCounter - 1);
        };
    };

    function addToCart(){
        onAdd(itemCounter);
    };


    return (
        <div className="contenedorItemCount">
            <div className="contenedorBotonesSumaResta">
                <button onClick={restar}><FontAwesomeIcon icon={faMinus} className="operador"/></button>
                <p>{itemCounter}</p>
                <button onClick={sumar}><FontAwesomeIcon icon={faPlus} className="operador"/></button>
            </div>
            <div>
                <button onClick={addToCart} className="botonAgregarCarrito">Agregar al carrito</button>
            </div>
        </div>
    );
};
