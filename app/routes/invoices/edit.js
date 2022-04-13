import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  invoiceList: service(),
  model(params) {
    let {invoice_id} = params;
    // console.log(this.invoiceList.invoices[0]);

    if(Number(invoice_id)) {
      let invoiceData = this.invoiceList.invoices[invoice_id-1];
      return invoiceData;
    }

    this.transitionTo('invoices.not-found-invoice');
  }
});
