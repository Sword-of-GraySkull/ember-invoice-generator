import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    // console.log('init', this.get('pokemon'));
  },

  didReceiveAttrs() {
    let poke = this.get('pokemon');
    poke.imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (poke.id+1) + ".png";
    // poke.set("imgURL", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(poke.id+1) + ".png")
    this.set('pokemon', poke);
    // console.log("didReceiveAttrs", this.get('pokemon'))
  },

  willRender() {
    this._super(...arguments);
    // console.log('willRender', this.get('pokemon'));
  },

  didInsertElement() {
    this._super(...arguments);
    // console.log('didInsertElement', this.get('pokemon'));
  },

  didRender() {
    this._super(...arguments);
    // console.log('didRender', this.get('pokemon'));
  },

  actions: {
    newTest() {
      // ############  Don't you dare to touch this code, Write your own code with your name in comment above your code. @lakshay
      // let action = this.get('hey');
      // console.log(action())

      // this.attrs.hey();
      // ##############

      this.sendAction();
    }
  }
});
