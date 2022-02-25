import React, {useContext} from 'react';
import './Cart.css';
import {CartContext} from '../../context/CartContext';
import CartDetail from './CartDetail/CartDetail';
import CartForm from './CartForm/CartForm';

export default function Cart(){
    const {cart, sumaTotalCarrito} = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (<h1 className='mensajeCarrito'>Aun no hay productos en el carrito</h1>) : (
                <>
                    <div className='contenedorGlobalItemsCarrito'>
                        {cart.map(function(producto) {
                            return (
                                <div key={producto.id} className='contenedorProductosCarrito'>
                                    <CartDetail itemCartDetail={producto}/>
                                </div>
                            );
                        })};
                    </div>
                    <div>
                        <p className='sumaTotal'>{'Total: $'+new Intl.NumberFormat("de-DE").format(sumaTotalCarrito())}</p>
                    </div>
                    <CartForm />
                </>
            )}
        </>
    );
};