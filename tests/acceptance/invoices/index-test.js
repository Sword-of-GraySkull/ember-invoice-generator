import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | invoices/index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /invoices/index', async function(assert) {
    await visit('/invoices/index');

    assert.equal(currentURL(), '/invoices/index', 'Visiting /invoices/index');
  });

  test('clicking create link redirects to invoices/create', async function(assert) {
    await visit('/invoices');

    await click('.create-invoice-link');

    assert.equal(
      currentURL(),
      '/invoices/create',
      'successfully redirected to /invoices/:invoice_id',
    );
  });

  test('clicking more... link redirects to invoices/:invoice_id ', async function(assert) {
    let service = this.owner.lookup('service:invoice-list');
    let invoiceData = {
      id: 1,
      customerName: 'bob',
      invoiceNumber: '123',
      orderNo: '234',
      invoiceDate: '12/12/2008',
      salesPerson: 'kuma',
      subject: 'Buying groceries',
      items: [
        {
          itemName: 'Ghee',
          quantity: 1,
          rate: 1,
          amount: 1,
        }
      ]
    }
    service.addInvoice(invoiceData);

    await visit('/invoices');

    await click('.view-invoice-link');
    assert.equal(currentURL(), '/invoices/1', 'successfully redirected to /invoices/:invoice_id');

    await visit('/invoices');
    assert.equal(currentURL(), '/invoices', 'able to return to /invoices route successfully');
    assert.equal(
      this.element.querySelector('.container .card-body p').textContent.trim(),
      'Customer Name: bob',
      'Invoice Data persists successfully in /invoices route'
    );
  })

  
});
