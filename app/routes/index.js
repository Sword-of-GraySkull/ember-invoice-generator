import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('home');
  },

  //#######333
  // actions: {
  //   error(error, transition) {
  //     // this.transitionTo("invoices.index")
  //   }
  // }
});
