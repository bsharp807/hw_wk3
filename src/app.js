const Pokemon = require('./models/pokemon.js');
const PokeGetView = require('./views/poke_get_view.js');
const PokeFormView = require('./views/poke_form_view.js');
const PokeAnsView = require('./views/poke_ans_view.js');
const PokeDisplay = require('./views/poke_display.js');
const Settings = require('./views/settings_view.js');
const SettingSubmit = require('./views/setting_submit_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const pokemon = new Pokemon();
  pokemon.bindEvents();
  pokemon.autoRefresh();
  pokemon.settingListener();

  const pokeAnsView = new PokeAnsView();
  pokeAnsView.bindEvents();

  const pokeDisplay = new PokeDisplay();
  pokeDisplay.bindEvents();

  const pokeFormView = new PokeFormView();
  pokeFormView.bindEvents();
  pokeFormView.submitPokemon();

  const settings = new Settings();
  settings.bindEvents();

  const settingSubmit = new SettingSubmit();
  settingSubmit.bindEvents();

  const pokeGetView = new PokeGetView();
  pokeGetView.bindEvents();

  pokemon.getPokemon();

});
