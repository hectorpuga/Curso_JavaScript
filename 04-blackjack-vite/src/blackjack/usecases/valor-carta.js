
/**
 * Esta función define el valor de la carta
 * @param {String} carta 
 * @returns {Number} Retorna el numero de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, (carta.length - 1));
    return isNaN(valor) ? (valor === 'A') ? 11 : 10 : Number(valor);
  }