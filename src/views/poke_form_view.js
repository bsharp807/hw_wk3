const PubSub = require('../helpers/pub_sub.js');

class PokeFormView {

  constructor() {
    this.element = document.querySelector('#poke-form');
    this.pokeName = null;
  }

  bindEvents() {
    PubSub.subscribe('Pokemon:one-poke-obj', (evt) => {
      this.pokeName = evt.detail.name;
    });
  }

  submitPokemon() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      let answer = false;
      const nameGiven = evt.target.pokemon.value.toLowerCase();
      if(nameGiven === this.pokeName) {
        answer = true
      }
      PubSub.publish('PokeFormView:PokeName', answer);
      this.element.reset();
    })
  }

}

module.exports = PokeFormView;
