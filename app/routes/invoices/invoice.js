import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  invoiceList: service(),
  itemList: service(),
  model(params) {
    let {invoice_id} = params;
    if(Number(invoice_id)) {
      let invoiceDetails = this.invoiceList.invoices[invoice_id-1];
      return invoiceDetails;
    }

    this.transitionTo('invoices.not-found-invoice');
  },

  setupController(controller, model) {
    controller.set('total', this.itemList.total);
  }
});
