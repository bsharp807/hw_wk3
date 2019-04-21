const Pokemon = require('./models/pokemon.js');
const PokeGetView = require('./views/poke_get_view.js');
const PokeFormView = require('./views/poke_form_view.js');
const PokeAnsView = require('./views/poke_ans_view.js');
const PokeDisplay = require('./views/poke_display.js');

document.addEventListener('DOMContentLoaded', () => {

  const pokemon = new Pokemon();
  pokemon.bindEvents();

  const pokeAnsView = new PokeAnsView();
  pokeAnsView.bindEvents();

  const pokeDisplay = new PokeDisplay();
  pokeDisplay.bindEvents();

  const pokeFormView = new PokeFormView();
  pokeFormView.bindEvents();
  pokeFormView.submitPokemon();

  const pokeGetView = new PokeGetView();
  pokeGetView.bindEvents();

  pokemon.getPokemon();

});
