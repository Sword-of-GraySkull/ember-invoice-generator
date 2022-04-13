import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  invoiceList: service(),
  model() {
    // console.log(this.get('store').findAll('invoice'))
    // return this.get('store').findAll('invoice').then(
    // )
    // console.log(this.controllerFor('create-invoice').getInvoices());
    // return this.controllerFor('create-invoice').getInvoices();
    return this.invoiceList.invoices;
    // return this.invoiceList.invoices;
  },

  setupController(controller, model) {
    console.log('here',controller, model);
  }
});
