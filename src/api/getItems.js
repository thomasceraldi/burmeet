const productos = [
    {
        id: 'classic', 
        imagen: "../img/classic.jpg", 
        titulo: "Classic", 
        descripcion: "La clasica. Contiene un medallon de carne, lechuga, tomate, queso, pepino, barbacoa y cebolla morada", 
        precio: 450,
        categoria: "simple"
    },
    {
        id: 'campo', 
        imagen: "../img/campo.jpg", 
        titulo: "Campo", 
        descripcion: "Una hamburguesa fresca. Contiene un medallon de carne, rucula, tomate, queso cheddar, cebolla, salsa golf y pepino", 
        precio: 600,
        categoria: "simple"
    },
    {
        id: 'bomba', 
        imagen: "../img/bomba.jpg", 
        titulo: "Bomba", 
        descripcion: "Increible. Su nombre lo dice todo. Contiene dos medallones de carne, lechuga, tomate, queso cheddar, huevo, cebolla morada y bacon", 
        precio: 750,
        categoria: "doble"
    },
    {
        id: 'burmeet', 
        imagen: "../img/burmeet.jpg", 
        titulo: "Burmeet", 
        descripcion: "El especial de la casa. Contiene dos medallones de carne, lechuga, rucula, pepino, queso cheddar y doble salsa golf", 
        precio: 700,
        categoria: "doble"
    },
    {
        id: 'aromav', 
        imagen: "../img/aroma-v.jpg", 
        titulo: "Aroma V", 
        descripcion: "Opcion veggie. Conecta con los aromas V. Contiene un medallon de soja con cebolla morada, ajo, pimientos asados, semillas de sesamo y pimienta negra, lechuga y tomate", 
        precio: 680,
        categoria: "veggie"
    },
    {
        id: 'espiritu', 
        imagen: "../img/espiritu.jpg", 
        titulo: "Espiritu", 
        descripcion: "Opcion veggie. Una hamburguersa que te recarga. Contiene un medallon de quinoa con espinaca, tomate, avena y ajo, lechuga, tomate, rucula, pepino, cebolla morada y salsa de yogurt vegana con yogurt natural de soja, menta picada, limon, aceite de oliva extra virgen y pimienta negra", 
        precio: 800,
        categoria: "veggie"
    }
];

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 500);
});

export function getItems(){
    return promesa;
};