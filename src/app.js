const Pokemon = require('./models/pokemon.js');
const PokeGetView = require('./views/poke_get_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const pokemon = new Pokemon();
  pokemon.bindEvents();


  const pokeGetView = new PokeGetView();
  pokeGetView.bindEvents();

});
