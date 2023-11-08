/**
 * 2C = Two of Club
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0, puntosComputadora = 0;


// Referencias del HTML

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo=document.querySelector("#btnNuevo");
const [puntajeJugador, PuntajeComputadora] = document.querySelectorAll('small');
const jugadorCartas = document.querySelector('#Jugador-cartas');
const computadoraCartas = document.querySelector('#Computadora-cartas');




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
    console.log(deck);

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

// turno de la computadora

const turnoComputadora = async(puntosMinimos) => {

    do {

        const carta = pedirCarta();

        puntosComputadora += valorCarta(carta);
        PuntajeComputadora.innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");

        computadoraCartas.append(imgCarta)

        if (puntosMinimos > 21) break;
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert("Nadie gano");
        }
        else if (puntosMinimos > 21) {
            alert("Computadora gano");
        }
        else if (puntosComputadora > 21) {
            alert("Jugador gano");
        } else {
            alert("Computadora Gano");
        }

    }, 30);

}


// Eventos

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);

    puntajeJugador.innerText = puntosJugador;



    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");

    jugadorCartas.append(imgCarta)

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho perdiste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        console.warn('21, Genial');
        turnoComputadora(puntosJugador);


    }

});
btnDetener.addEventListener("click", () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

})

btnNuevo.addEventListener('click',()=>{

    console.clear();
    deck=[];
    crearDeck();
    jugadorCartas.innerHTML='';
    computadoraCartas.innerHTML='';
    puntosJugador=0;
    puntosComputadora=0;
    puntajeJugador.innerText=0;
    PuntajeComputadora.innerText=0;
    btnPedir.disabled=false;
    btnDetener.disabled=false;   
    
    
    


})
