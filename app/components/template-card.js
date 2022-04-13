import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  doubleClick() {
    console.log('lo');
    return false;
  },
  willRender() {
    this.set('list', ['1', '2', '3']);
  }
});
