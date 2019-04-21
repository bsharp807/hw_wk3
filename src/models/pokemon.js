const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');
const RNG = require('../helpers/rng.js');

class Pokemon {

  constructor() {
    this.pokemon = null;
    this.arrayNumber = 150;
    this.firstTime = 0
  }

  autoRefresh() {
    PubSub.subscribe('PokeFormView:PokeName', () => {
        this.getPokemon();
    })
  }

  bindEvents() {
    PubSub.subscribe('Poke-Get-View:Button-Pressed', (evt) => {
      this.getPokemon();
    });
  }

  getPokemon() {
    const rng = new RNG(this.arrayNumber);
    const pokeNumber = rng.rand() + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${ pokeNumber }/`;
    const request = new RequestHelper(url);
    request.get()
      .then((data) => {
        this.pokemon = data;
        PubSub.publish('Pokemon:one-poke-obj', this.pokemon);
      })
  }
}

module.exports = Pokemon;
