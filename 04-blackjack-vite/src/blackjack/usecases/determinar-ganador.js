export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
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
  
    }, 100);
  }