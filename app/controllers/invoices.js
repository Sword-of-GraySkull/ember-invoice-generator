import Controller, { inject as controller } from '@ember/controller';

export default Controller.extend({
  // init() {
  //   this._super(...arguments);
  //   var data = {};
  //   console.log(data);
  // }
  // data: "data",
  invoices: controller('create-invoice'),
  invoiceData: null,

  init() {
    this._super(...arguments);
    // this.invoiceData.set(this.invoices.getInvoices());
    // this.set('invoiceData', this.invoices.getInvoices());
    // console.log(this.invoiceData)
    // console.log(this.invoices.getInvoices());
  }
});
