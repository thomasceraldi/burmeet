import {getDocs, collection} from "firebase/firestore";
import {baseDatos} from "../firebase";

const promesa = new Promise((resolve) => {
    const itemsCollection = collection(baseDatos, 'items');
    getDocs(itemsCollection).then((snapshot) => {
        const productos = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        resolve(productos);
    });
});

export function getItems(){
    return promesa;
};