import Route from '@ember/routing/route';

export default Route.extend({
  error(error, transition) {
    if(error) {
      this.transitionTo('error');
    }
  }
});
