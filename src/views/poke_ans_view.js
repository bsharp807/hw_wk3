const PubSub = require('../helpers/pub_sub.js');

class PokeAnsView {

  constructor() {
    this.element = document.querySelector('#ans-section')
  }

  bindEvents() {
    PubSub.subscribe('PokeFormView:PokeName', (evt) => {
      const name = evt.detail;
      this.render(name);
    })
  }

  render(name) {
    this.clearAnswer();

    const answer = this.createAnswer(name);
    this.element.appendChild(answer);
  }

  createAnswer(name) {
    const answer = document.createElement('p');
    if(name) {
      answer.textContent = `Correct!`
    } else answer.textContent = 'Wrong! >=('
    return answer
  }

  clearAnswer() {
    this.element.innerHtml = '';
  }

}

module.exports = PokeAnsView;
