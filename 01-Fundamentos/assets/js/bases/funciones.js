

function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);

    return [1, 2];

    // esto nunca se va a ejecutar
    console.log('Soy un código que esta despueés del return');
}

const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}
const saludarFlecha2 = nombre => {
    console.log('Hola ' + nombre);
}



const retornoDeSaludar = saludar("Hector", 40, true, 'Costa Rica');
// console.log(retornoDeSaludar[0], retornoDeSaludar[1]); 
// saludarFlecha();
// saludarFlecha2('Melissa');

// saludar2("Hector");

function sumar(a, b) {
    return a + b;
}

// const sumar2=(a,b)=>{
//     return a+b;
// }
const sumar2=(a,b)=> a+b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2=()=> Math.random();



console.log(getAleatorio2());