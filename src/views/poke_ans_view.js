const PubSub = require('../helpers/pub_sub.js');

class PokeAnsView {

  constructor() {
    this.element = document.querySelector('#ans-section')
    this.totals = document.querySelector('#totals')
    this.totalCorrect = 0
    this.totalWrong = 0
  }

  bindEvents() {
    PubSub.subscribe('PokeFormView:PokeName', (evt) => {
      const name = evt.detail;
      this.render(name);
      this.updateTotals(name);
    })
  }

  updateTotals(name) {
    if(name) {
      this.totalCorrect += 1;
    } else this.totalWrong =+ 1;
    this.renderTotals();
  }

  renderTotals() {
    this.totals.innerHTML = '';
    const runningTotal = document.createElement('p');
    runningTotal.textContent = `Correct: ${this.totalCorrect} vs Incorrect: ${this.totalWrong}`;
    this.totals.appendChild(runningTotal);
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
    this.element.innerHTML = '';
  }

}

module.exports = PokeAnsView;
