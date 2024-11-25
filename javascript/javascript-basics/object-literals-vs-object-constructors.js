// constructores: como funcion y como clase (como function es deprecated)
function objectConstructor(nombreParam, precioParam) {
  this.nombre = nombreParam;
  this.precio = precioParam;
}

function clienteConstructor(nombreCliente, apellidoCliente) {
  this.nombre = nombreCliente;
  this.apellidoCliente = apellidoCliente;
}

class objectBlueprint {
  constructor(nombreParam1, precioParam1) {
    this.nombre = nombreParam1;
    this.precio = precioParam1;
  }
}

// --- INSTANCIAS

// objeto literal
const object1 = {
  nombre: "Boligrafo",
  precio: 0.5
};

// con base a una plantilla
const object2 = new objectConstructor("Cepillo de dientes", 5);
const object3 = new objectBlueprint("Calculadora", 20);
const cliente1 = new clienteConstructor("Alfredo", "Martinez");

// impresion de objetos
console.log(object1);
console.log(object2);
console.log(object3);
console.log(cliente1);

// --- PROTOTYPES: funciones que solo se pueden utilizar en un objeto especifico

// Esta funcion diseñada para productos se puede usar para cualquier tipo de obj
function beautifyProductLog(producto) {
  console.log(`El producto ${producto.nombre} tiene un precio de ${producto.precio}.`);
}

beautifyProductLog(object1);
beautifyProductLog(object2);
beautifyProductLog(object3);
beautifyProductLog(cliente1);

// Funciones
