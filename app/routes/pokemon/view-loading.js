import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    loading(controller, transition, originRoute) {
      controller.set('isLoading', true);

      // return true;
    },
  }
});
