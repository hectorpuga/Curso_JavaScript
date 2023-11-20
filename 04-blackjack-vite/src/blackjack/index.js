import _ from 'underscore'
// import crearDeck,{hola} from './usecases/crear-deck';

import { crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora } from './usecases'

let deck = [];
let puntosJugadores = [];
const divCartasJugadores = document.querySelectorAll('.divCartas'),
  puntosHTML = document.querySelectorAll('small');

// Referencias del HTML

const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector("#btnNuevo");

// Esta inicializara el juego

const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck();
  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }
  puntosHTML.forEach((element) => element.innerText = 0)
  divCartasJugadores.forEach(element => element.innerHTML = '')
  btnPedir.disabled = false;
  btnDetener.disabled = false;
}


// Eventos

btnPedir.addEventListener('click', () => {

  const carta = pedirCarta(deck);

  const puntosJugador = acumularPuntos(carta, 0, puntosJugadores,puntosHTML)
  crearCarta(carta, 0, divCartasJugadores)
  if (puntosJugador > 21) {
    console.warn('Lo siento mucho perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck,puntosJugadores,puntosHTML,divCartasJugadores);
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    btnDetener.disabled=true;
    console.warn('21, Genial');
    turnoComputadora(puntosJugador, deck,puntosJugadores,puntosHTML,divCartasJugadores);


  }

});
btnDetener.addEventListener("click", () => {

  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores[0], deck,puntosJugadores,puntosHTML,divCartasJugadores);

})

btnNuevo.addEventListener('click', () => {

  inicializarJuego();

})




