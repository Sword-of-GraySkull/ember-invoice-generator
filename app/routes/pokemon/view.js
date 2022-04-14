import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  async model(params) {
    let { view_id } = params;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${view_id}/`);
    if(response.status !== 404) {
      const jsonData = await response.json();
      // throw Error("io");
      return jsonData;
    }
    this.transitionTo('pokemon.not-found-pokemon');
    // this.transitionTo('not-found');

    return response

  },

  actions: {
  //   loading(controller, transition, originRoute) {
      // controller.set('isLoading', true);

  //     // return true;
  //   },

    error(error, transition) {
      if(error) {
        // console.log(error)
        // this.controllerFor('error').set('error', error);
        // this.transitionTo('error');
        return true;
      }
    }
  }
});
