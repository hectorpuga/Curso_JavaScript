
// function crearPersona(nombre, apellido) {

//     return { nombre, apellido }

// }

const crearPersona=(nombre, apellido)=> ({nombre, apellido})


const persona = crearPersona('Hector', 'Puga')
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2=(edad,...arguments)=>{
    // console.log({edad,arguments});
    return arguments;
}

const [casado,vivo,nombre,saludo]=imprimeArgumentos2(10,true,false,'Hector','Hola');

console.log({casado,vivo,nombre,saludo});


const {apellido:nuevoApellido}=crearPersona('Hector','Puga');

console.log({nuevoApellido});

const tony = {
    nombre: 'tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hylkbuster'],

};


// const imprimePropiedades=(personaje)=>{
    

//     console.log("nombre",personaje.nombre);
//     console.log("codeName",personaje.codeName);
//     console.log("vivo",personaje.vivo);
//     console.log("edad",personaje.edad);
//     console.log("trajes",personaje.trajes);

// }


const imprimePropiedades=({nombre,codeName,vivo,edad=15,trajes})=>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}


imprimePropiedades(tony);

