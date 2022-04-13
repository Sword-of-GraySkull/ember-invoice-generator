import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

let data = EmberObject.extend({
  itemName: null,
  quantity: 1,
  rate: 1,
  amount: computed('quantity','rate', function() {
    return this.quantity * this.rate;
  }),
})

export default Controller.extend({
  invoiceList: service(),
  itemList: service(),

  init() {
    this._super(...arguments);
    this.addItemValues(data.create());
  },

  addItemValues(data) {
    this.itemList.addItem(data);
  },

  actions: {
    updateItemName(event) {
      let value = event.target.value;
      let index = event.target.getAttribute('index');
      this.itemList.updateItem(index, 'itemName', value);
    },
    updateQuantity(event) {
      let value = event.target.value;
      let index = event.target.getAttribute('index');
      this.itemList.updateItem(index, 'quantity', value);
    },
    updateRate(event) {
      let value = event.target.value;
      let index = event.target.getAttribute('index');
      this.itemList.updateItem(index, 'rate', value);
    },

    createInvoice() {
      let invoiceData = {
        id: this.invoiceList.invoices ? this.invoiceList.invoices.length+1 : 1,
        customerName: this.model.customerName,
        invoiceNumber: this.model.invoiceNumber,
        orderNo: this.model.orderNo,
        invoiceDate: this.model.invoiceDate,
        salesPerson: this.model.salesPerson,
        subject: this.model.subject,
        items: this.itemList.items,
      }

      this.invoiceList.addInvoice(invoiceData);
      this.itemList.set('items', A([data.create()]));

      this.transitionToRoute('invoices');
    },
    addNewRowItem() {
      this.addItemValues(data.create());
    },
  }
});
