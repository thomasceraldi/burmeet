import React from 'react';
import './ItemList.css';
import Item from './Item/Item';

export default function ItemList({producto}){
    return (
        <div className='contenedorBurgers'>
            {
                producto.map(function(productoItem) {
                    return (
                        <Item key={productoItem.id} item={productoItem}/>
                    );
                })
            };
        </div>
    );
};