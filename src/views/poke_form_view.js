const PubSub = require('../helpers/pub_sub.js');

class PokeFormView {

  constructor() {
    this.element = document.querySelector('#poke-form');
  }

  submitPokemon() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const name = evt.target.pokemon.value;
      SubPub.publish('PokeFormView:PokeName', name);
    })
  }
}

module.exports = PokeFormView;
