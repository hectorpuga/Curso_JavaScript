
let hola;
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre ${this.nombre} - Edad: ${this.edad}`);
    },
    datos: function () {
        this.hola;
    }
}


const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre ${this.nombre} - Edad: ${this.edad}`);
    },
}

// fher.imprimir();
// Esto se debe de crear con la palabra new
function Persona(nombre, edad) {
    this.nombre=nombre;
    this.edad=edad;
    this.imprimir=function() {
        console.log(`Nombre ${this.nombre} - Edad: ${this.edad}`);
    }
    console.log(`Se ejecuto esta linea`);
}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);

console.log(maria);
maria.imprimir();
melissa.imprimir();