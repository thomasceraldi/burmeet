import React, {useContext, useState} from 'react';
import {CartContext} from '../../../context/CartContext';
import './CartForm.css';
import {addDoc, collection} from 'firebase/firestore';
import {baseDatos} from '../../../firebase';

export default function CartForm(){
    const {relevanteCompra, clearCart, sumaTotalCarrito} = useContext(CartContext);
    const [className, setClassName] = useState('campoValido');
    const [mensajeCompra, setMensajeCompra] = useState('');

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');

    const controladorNombre = e => setNombre(e.target.value);
    const controladorTelefono = e => setTelefono(e.target.value);
    const controladorEmail = e => setEmail(e.target.value);
    const controladorDireccion = e => setDireccion(e.target.value);

    

    function onSubmit(e){
        e.preventDefault();
        if(![nombre, telefono, email, direccion].some(valor => valor === '')){
            const itemCollection = collection(baseDatos, 'ordenes');
            const nuevaOrden = {
                buyer: {
                    nombre,
                    telefono,
                    email,
                    direccion
                },
                items: relevanteCompra(),
                total: sumaTotalCarrito()
            };
            addDoc(itemCollection, nuevaOrden);
            setNombre(e.target.reset());
            setTelefono(e.target.reset());
            setEmail(e.target.reset());
            setDireccion(e.target.reset());
            setMensajeCompra('Su orden se registro con exito. ¡En breve llegara a destino!');
            setTimeout(() => {
                setMensajeCompra('');
            }, 3000);
        }else{
            setClassName('campoInvalido');
            setMensajeCompra('Faltan completar campos');
            setTimeout(()=> {
                setClassName('campoValido');
                setMensajeCompra('');
            }, 3000);
        };
    };

    return (
        <div>
            <h2 className='tituloFormOrden'>Registre su orden</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label className='labelFormOrden'>Nombre</label>
                    <input className={className} value={nombre} onChange={controladorNombre} type='text'/>
                </div>
                <div>
                    <label className='labelFormOrden'>Telefono</label>
                    <input className={className} value={telefono} onChange={controladorTelefono} type='text'/>
                </div>
                <div>
                    <label className='labelFormOrden'>Email</label>
                    <input className={className} value={email} onChange={controladorEmail} type='email'/>
                </div>
                <div>
                    <label className='labelFormOrden'>Direccion</label>
                    <input className={className} value={direccion} onChange={controladorDireccion} type='text'/>
                </div>
                <div>
                    <button onClick={clearCart} className='botonCarrito'>Limpiar Carrito</button>
                    <button className='botonCarrito' type='submit'>Finalizar Compra</button>
                </div>
                <div>
                    <p className='mensajeCompra'>{mensajeCompra}</p>
                </div>
            </form>
        </div>
    );
};