import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({
  invoices: null,

  init() {
    this._super(...arguments);
    this.set('invoices', A([]));
  },
  addInvoice(invoice) {
    this.invoices.pushObject(invoice);
  },
  updateInvoice(invoice) {
    let list = this.get('invoices');
    let id = invoice.id;
    list[id-1] = invoice;
    this.set('invoices', list);
  },

});
