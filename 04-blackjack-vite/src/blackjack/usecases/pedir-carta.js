
/**
 * Esta función me permite toamr una carta
 * @param {Array<String>} deck 
 * @returns {String}
 */
export const pedirCarta = (deck) => {
    if (!deck||deck.length === 0) {

      throw 'No hay cartas en el deck';
    }


    return deck.pop();
  }
