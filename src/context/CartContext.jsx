import {createContext, useState} from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    function addToCart(cantidad, item){
        isOnCart(item.id) ? sumarCantidadCart(cantidad, item) : setCart([...cart, {...item, cantidad}]);
    };

    function isOnCart(id){
        const estaEnCarrito = cart.some((prod) => prod.id === id);
        return estaEnCarrito;
    }; // esto devuelve true o false por el .some

    function sumarCantidadCart(cantidad, item){
        const carrito = [...cart];
        carrito.forEach((producto) => {
            if(producto.id === item.id) {
                producto.cantidad += cantidad;
            };
        });
        setCart(carrito);
    };

    function removeToCart(itemId){
        setCart(cart.filter((item) => item.id !== itemId));
    };

    function clearCart(){
        setCart([]);
    };

    function sumaTotalCarrito(){
        const arraySumaCarrito = [];
        cart.forEach((producto) => {
        arraySumaCarrito.push(producto.cantidad * producto.precio); 
        });
        const sumaTotal = arraySumaCarrito.reduce((previo, sumar) => previo + sumar, 0);
        return sumaTotal;
    };

    function sumarItems(){
        return cart.reduce((prev, item) => prev += item.cantidad, 0);
    };

    return <CartContext.Provider value={{cart, addToCart, clearCart, removeToCart, sumaTotalCarrito, sumarItems}}>{children}</CartContext.Provider>;
};