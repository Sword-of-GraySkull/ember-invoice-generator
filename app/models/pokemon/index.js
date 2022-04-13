import Model from '@ember-data/model';
import DS from 'ember-data';

const { attr } = DS;

export default Model.extend({
  count: attr('number'),
  next: attr('string'),
});
