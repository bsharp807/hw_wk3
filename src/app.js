const Pokemon = require('./models/pokemon.js');
const PokeGetView = require('./views/poke_get_view.js');
const PokeFormView = require('./views/poke_form_view.js');
const PokeDisplay = require('./views/poke_display.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const pokemon = new Pokemon();
  pokemon.bindEvents();

  const pokeDisplay = new PokeDisplay();
  pokeDisplay.bindEvents();

  const pokeFormView = new PokeFormView();
  pokeFormView.submitPokemon();

  const pokeGetView = new PokeGetView();
  pokeGetView.bindEvents();

});
