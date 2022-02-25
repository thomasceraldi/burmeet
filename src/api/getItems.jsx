import {getDocs, collection} from "firebase/firestore";
import {baseDatos} from "../firebase";

const promesa = new Promise((resolve, reject) => {
    // aca se refiere a la base de datos (donde esta almacenada la coleccion) y al nombre de la coleccion
    const itemsCollection = collection(baseDatos, 'items');
    getDocs(itemsCollection).then((snapshot) => {
        const productos = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        resolve(productos)
    });
});

export function getItems(){
    return promesa;
};