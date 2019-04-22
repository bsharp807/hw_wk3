const PubSub = require('../helpers/pub_sub.js');

class SettingSubmit {

  constructor() {
    this.element = document.querySelector('#overall-settings');
    this.options = document.querySelector('#option-select');
  }

  bindEvents() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const genArray = evt.target.genSetting.value;
      PubSub.publish('Setting-Submit:gen-array', genArray);
      this.options.style.visibility = 'hidden';
    })
  }

}

module.exports = SettingSubmit;
