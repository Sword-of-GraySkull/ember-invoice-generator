import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: [{
    searchTerm: {
      as: 'pokemonName'
    }
  }],
  searchTerm: '',

  pokeData: computed('searchTerm', function() {
    let data = this.get('model');
    let searchPattern = new RegExp(this.get('searchTerm'));
    data = data.filter((item, i) => {
      return item.name.match(searchPattern);
    })
    return data;
  }),

  lastSearch: '',

  actions: {
    testAction() {
      alert('tested successfully')
    }
  }
});

// export default Controller.extend({
//   queryParams: ['pokemonName'],
//   pokemonName: '',

//   pokeData: null,
//   lastSearch: '',
//   searchTerm: oneWay('pokemonName'),

//   search() {
//     let data = this.get('model');
//     let searchPattern = new RegExp(this.get('searchTerm'));
//     data = data.filter((item, i) => {
//       return item.name.match(searchPattern);
//     })
//     this.set('pokemonName', this.get('searchTerm'))
//     // console.log(data);
//     this.set('pokeData', data);
//     // this.transitionToRoute('invoices.index')
//     // this.transitionToRoute('pokemon.index', {queryParams: {pokemonName: this.pokemonName}})
//     this.set('lastSearch', this.get('searchTerm'));

//   },

//   actions: {
//     searchPokemon() {
//       this.search();
//     },

//     testAction() {
//       alert('tested successfully')
//     }
//   }
// });


// V 0.0.0

// queryParams: ['pokemonName'],
//   pokemonName: '',

//   pokeData: null,
//   lastSearch: '',

//   search() {
//     let searchTerm = this.get('searchTerm') !== undefined ? this.get('searchTerm').toLowerCase() : '';
//     let data = this.get('model');
//     let searchPattern = new RegExp(searchTerm);
//     data = data.filter((item) => {
//       return item.name.match(searchPattern);
//     })
//     this.set('pokemonName', searchTerm)
//     this.set('pokeData', data);
//     // console.log('jio',this.pokemonName)
//     // this.transitionToRoute('invoices.index')
//     // this.transitionToRoute('pokemon.index', {queryParams: {pokemonName: this.pokemonName}})
//     this.set('lastSearch', searchTerm);
//   },

//   actions: {
//     searchPokemon() {
//       this.search();
//     }
//   }
