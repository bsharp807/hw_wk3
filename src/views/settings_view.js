const PubSub = require('../helpers/pub_sub.js');

class Settings {

  constructor() {
    this.element = document.querySelector('#settings');
    this.options = document.querySelector('#option-select');
    this.body = document.querySelector('body');
  }

  bindEvents() {
    this.element.addEventListener('click', (evt) => {
    this.revealSettings();
    })
  }

  revealSettings() {
    this.options.style.visibility = 'visible';
  }
}

module.exports = Settings;
