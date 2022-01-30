import React from "react";
import './ItemCount.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from "@fortawesome/free-solid-svg-icons";


export default function ItemCount({stock, initial, numeroCompras}) {
    
    function sustraccionProducto(){
        if(initial > 1) {
            numeroCompras(initial - 1);
        };
    };

    function adicionProducto(){
        if(initial < stock) {
            numeroCompras(initial + 1);
        };
    };

    function onAdd(){
        console.log('Se realizo su compra de ' + initial.toString() + ' productos');
        numeroCompras(initial = 1);
    }

    return (
        <div className="contenedorItemCount">
            <div className="contenedorBotonesSumaResta">
                <button onClick={sustraccionProducto}><FontAwesomeIcon icon={faMinus} className="operador"/></button>
                <p>{initial}</p>
                <button onClick={adicionProducto}><FontAwesomeIcon icon={faPlus} className="operador"/></button>
            </div>
            <div>
                <button onClick={onAdd} className="botonAgregarCarrito">Agregar al carrito</button>
            </div>
        </div>
    );
};
