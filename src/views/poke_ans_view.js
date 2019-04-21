const PubSub = require('../helpers/pub_sub.js');

class PokeAnsView {

  constructor() {
    this.element = document.querySelector('#ans-section')
  }

  bindEvents() {
    PubSub.subscribe('PokeFormView:PokeName', (evt) => {
      const name = evt.detail;
    })
  }
}

module.exports = PokeAnsView;
