import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import './ItemListContainer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';
import {getItems} from '../../api/getItems';
import ItemList from "./ItemList/ItemList";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


export default function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([]);
    const {productoCategoria} = useParams();

    useEffect(() => {
        getItems().then((productos) => {
            if(!productoCategoria){
                setProductos(productos);
            }else{
                const productoFiltrados = productos.filter((producto) => {return producto.categoria === productoCategoria});
                setProductos(productoFiltrados);
            };
        });
    }, [productoCategoria]);

    return (
        <div>
            <div className="contenedorItemList">
                <FontAwesomeIcon icon={faHamburger} className="burger"/>
                <h1 className="bienvenida">{greeting}</h1>
                <FontAwesomeIcon icon={faHamburger} className="burger"/>
            </div>
            {productos.length > 0 ? <ItemList producto={productos}/> : <div className="contenedorSpinner"><FontAwesomeIcon icon={faSpinner} className="spinner"/></div>}
            <p className="descripcionesItemListContainer">* Todas las hamburguesas vienen con papas</p>
            <p className="descripcionesItemListContainer">* Todos los envios son sin cargo</p>
        </div>
    );
};