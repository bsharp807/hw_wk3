const PubSub = require('../helpers/pub_sub.js');

class PokeAnsView {

  constructor() {
    this.element = document.querySelector('#ans-section')
    this.correct = document.querySelector('#correct')
    this.incorrect = document.querySelector('#incorrect')
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
    switch(name) {
      case true:
        this.totalCorrect += 1;
        this.renderCorrectTotals();
        break;
      case false:
        this.totalWrong += 1;
        this.renderIncorrectTotals();
        break;
      default:
        console.log('how did it get here!?');
    }
  }

  renderCorrectTotals() {
    this.correct.innerHTML = '';
    const runningTotal = document.createElement('p');
    runningTotal.textContent = `Correct: ${this.totalCorrect}`;
    this.correct.appendChild(runningTotal);
  }

  renderIncorrectTotals() {
    this.incorrect.innerHTML = '';
    const runningTotal = document.createElement('p');
    runningTotal.textContent =  `Incorrect: ${this.totalWrong}`;
    this.incorrect.appendChild(runningTotal);
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
