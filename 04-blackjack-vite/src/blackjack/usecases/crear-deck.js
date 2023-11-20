import _ from 'underscore'


/**
 * Esta función crea un nuevo deck
 * @returns {Array<String>} retorna un nuevo deck
 */
export const crearDeck = () => {

  const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K'];

  let deck = [];

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


  return _.shuffle(deck);
  ;

}
