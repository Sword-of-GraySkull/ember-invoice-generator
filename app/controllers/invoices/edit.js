import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  invoiceList: service(),

  actions: {
    saveChanges() {
      let invoiceData = {
        id: this.model.id,
        customerName: this.model.customerName,
        invoiceNumber: this.model.invoiceNumber,
        orderNo: this.model.orderNo,
        invoiceDate: this.model.invoiceDate,
        salesPerson: this.model.salesPerson,
        subject: this.model.subject,
        items: this.model.items,
      };

      this.invoiceList.updateInvoice(invoiceData);

      this.transitionToRoute('invoices.index')
    }
  }
});
