const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');
const RNG = require('../helpers/rng.js');

class Pokemon {

  constructor() {
    this.pokemon = null;
    this.arrayNumber = 151;
    this.generations = 1
    this.genArray = [
      {
        totalInGen: 151,
        startNumber: 1
      },
      {
        totalInGen: 100,
        startNumber: 152
      },
      {
        totalInGen: 135,
        startNumber: 252
      },
      {
        totalInGen: 107,
        startNumber: 387
      },
      {
        totalInGen: 156,
        startNumber: 494
      },
      {
        totalInGen: 72,
        startNumber: 650
      },
      {
        totalInGen: 88,
        startNumber: 722
      }
    ]
  }

  settingListener() {
    PubSub.subscribe('Setting-Submit:gen-array', (evt) => {
      const genArrayNum = evt.detail;
      const generation = this.genArray;
      this.arrayNumber = generation[genArrayNum].totalInGen;
      this.generations = generation[genArrayNum].startNumber;
      this.getPokemon();
    })
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
    const pokeNumber = rng.rand() + this.generations;
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
