/**
 * 2C = Two of Club
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntoJugador = 0, puntosComputadora = 0;


// Referencias del HTML

const btnPedir = document.querySelector('#btnPedir');
const [PuntajeJugador,PuntajeComputadora]=document.querySelectorAll('small');
const jugadorCartas= document.querySelector('#Jugador-cartas');

console.log(jugadorCartas);


// Esta función crea un nuevo deck
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(`${i}${tipo}`)

        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo)
        }
    }
    // console.log(deck);

    deck = _.shuffle(deck);

    return deck;

}

crearDeck();


// Esta función me permite toamr una carta

const pedirCarta = () => {

    if (deck.length === 0) {

        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();


    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, (carta.length - 1));
    return isNaN(valor) ? (valor === 'A') ? 11 : 10 : Number(valor);
}



// Eventos

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

puntoJugador+=valorCarta(carta);

PuntajeJugador.innerText=puntoJugador;

console.log(puntoJugador);
});