// Turno 0 = primer jugador y el ultimo sera la computadora

import { valorCarta } from "./index";


export const acumularPuntos = (carta, turno,puntosJugadores,puntosHTML) => {

    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  }