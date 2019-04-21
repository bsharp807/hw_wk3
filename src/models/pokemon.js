const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');
const RNG = require('../helpers/rng.js');

class Pokemon {

  constructor() {
    this.pokemon = [];
    this.arrayNumber = 150;
  }

  bindEvents() {
    PubSub.subscribe('Poke-Get-View:Button-Pressed', (evt) => {
      console.log(evt.detail);
      this.getPokemon();
    });
  }

  getPokemon() {
    const rng = new RNG(this.arrayNumber);
    const pokeNumber = rng.rand();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`;
    PubSub.publish('Pokemon:one-poke-url', url);
  }
}

module.exports = Pokemon;
