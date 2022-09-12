
let titulo = document.getElementById("titulo");

titulo.innerHTML = "Los productos encontrados son:"


let productos = [
    { id: 1, nombre: "Barra olimpica", precio: 20000 },
    { id: 2, nombre: "Mancuernas", precio: 5000 },
    { id: 3, nombre: "Disco 10kg", precio: 3000 },
    { id: 4, nombre: "Disco 5kg", precio: 1500 },
    { id: 5, nombre: "Banda elastica", precio: 2000 },
    { id: 6, nombre: "Colchonetas", precio: 1000 },
    { id: 7, nombre: "TRX", precio: 10000 },
    { id: 8, nombre: "Rueda", precio: 2100 },
    { id: 9, nombre: "Disco 15kg", precio: 4000 },
    { id: 10, nombre: "Disco 20kg", precio: 6000 },
    { id: 11, nombre: "Barra", precio: 5500 },
    { id: 12, nombre: "Medicine Ball", precio: 3500 },

];

let contenedor = document.getElementById("contenedor");
let precio = parseInt(prompt("Ingrese el precio maximo"));

let Filtrados = productos.filter(item => item.precio <= precio)

for(const producto of Filtrados){
    let div = document.createElement("div");
    div.className = "tarjetas"
    div.innerHTML = `<h3> ID: ${producto.id}</h3>
                     <p>Producto: ${producto.nombre}</p>
                     <b>Precio: ${producto.precio}</b>`;
                    
    contenedor.append(div);
}

