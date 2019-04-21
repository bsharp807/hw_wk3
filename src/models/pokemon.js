const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');
const RNG = require('../helpers/rng.js');

class Pokemon {

  constructor() {
    this.pokemon = null;
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
    console.log(rng);
    const pokeNumber = rng.rand();
    console.log(pokeNumber);
    const url = `https://pokeapi.co/api/v2/pokemon/${ pokeNumber }/`;
    console.log(url);
    const request = new RequestHelper(url);
    console.log(request);
    request.get()
      .then((data) => {
        this.pokemon = data;
        PubSub.publish('Pokemon:one-poke-obj', this.pokemon);
      })
  }
}

module.exports = Pokemon;
