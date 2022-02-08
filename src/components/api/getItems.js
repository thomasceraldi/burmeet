const productos = [
    {
        id: 'classic', 
        imagen: "img/classic.jpg", 
        titulo: "Classic", 
        descripcion: "La clasica. Contiene un medallon de carne, lechuga, tomate, queso, pepino, barbacoa y cebolla morada", 
        precio: 450
    },
    {
        id: 'campo', 
        imagen: "img/campo.jpg", 
        titulo: "Campo", 
        descripcion: "Hamburguesa fresca. Contiene un medallon de carne, rucula, tomate, queso cheddar, cebolla, salsa golf y pepino", 
        precio: 600
    },
    {
        id: 'bomba', 
        imagen: "img/bomba.jpg", 
        titulo: "Bomba", 
        descripcion: "Increible. Contiene dos medallones de carne, lechuga, tomate, queso cheddar, huevo, cebolla morada y bacon", 
        precio: 750
    }
];

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

export function getItems(){
    return promesa;
};