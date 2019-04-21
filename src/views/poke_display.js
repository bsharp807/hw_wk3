const PubSub = require('../helpers/pub_sub.js');

class PokeDisplay {

  constructor() {
    this.element = document.querySelector('#poke-display');
  }

  bindEvents() {
    PubSub.subscribe('Pokemon:one-poke-obj', (evt) => {
      const sprite = evt.detail.sprites.front_default;
      this.render(sprite);
    })
  }

  render(sprite) {
    this.clearMons();

    const img = this.createImage(sprite);
    this.element.appendChild(img);

  }

  clearMons() {
    this.element.innerHTML = '';
  }

  createImage(imgUrl) {
    const img = document.createElement('img');
    img.src = imgUrl;
    return img;
  }


}

module.exports = PokeDisplay;
