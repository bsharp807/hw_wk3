const PubSub = require('../helpers/pub_sub.js');

class PokeGetView {

  constructor() {
    this.element = document.querySelector('#poke-get');
  }


  bindEvents() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      PubSub.publish('Poke-Get-View:Button-Pressed', evt.target.submit.value);
    })
  }

  publishPokemonImg(pokemon) {
    const pokeSprite = pokemon
  }
}

module.exports = PokeGetView;
