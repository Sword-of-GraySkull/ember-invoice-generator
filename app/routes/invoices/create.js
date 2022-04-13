import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  model() {
    return EmberObject.create({
      customerName: null,
      invoiceNumber: null,
      orderNo: null,
      invoiceDate: null,
      salesPerson: null,
      subject: null,
    })
  }
});
