const PubSub = require('../helpers/pub_sub.js');

class PokeDisplay {

  constructor() {
    this.element = document.querySelector('#poke-display');
  }

  bindEvents() {
    PubSub.subscribe('Pokemon:one-poke-obj', (evt) => {
      console.log(evt.detail);
    })
  }


}

module.exports = PokeDisplay;
