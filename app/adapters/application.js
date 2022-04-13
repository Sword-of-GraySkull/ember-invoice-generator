import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
  namespace: 'https://pokeapi.co/api/v2/',
  buildURL(...args) {
    // console.log('poke', ...args)
    return this._super(...args);
  }
});
