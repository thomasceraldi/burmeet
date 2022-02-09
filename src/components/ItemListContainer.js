import React, {useState, useEffect} from "react";
import './ItemListContainer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';
import ItemCount from "./ItemCount";
import {getItems} from './api/getItems';
import ItemList from "./ItemList";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export default function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getItems().then((productos) => {
            setProductos(productos);
        });
    }, []);

    const[numeroCompraInicial, setNumeroCompraInicial] = useState(1);

    return (
        <div>
            <div className="contenedorItemList">
                <FontAwesomeIcon icon={faHamburger} className="burger"/>
                <h1 className="bienvenida">{greeting}</h1>
                <FontAwesomeIcon icon={faHamburger} className="burger"/>
            </div>
            {productos.length > 0 ? <ItemList producto={productos}/> : <div className="contenedorSpinner"><FontAwesomeIcon icon={faSpinner} className="spinner"/></div>}
            <ItemCount stock={5} initial={numeroCompraInicial} numeroCompras={setNumeroCompraInicial}/>
        </div>
    );
};