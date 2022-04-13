import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | invoices/create', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /invoices/create', async function(assert) {
    await visit('/invoices/create');
    assert.equal(currentURL(), '/invoices/create');
  });

  test('create invoice flow works', async function(assert) {
    await visit('/invoices/create');

    await fillIn('#customerName', 'bob');
    await fillIn('#invoiceNumber', '123');
    await fillIn('#orderNo', '234');
    await fillIn('#invoiceDate', '01/01/2008');
    await fillIn('#salesPerson', 'Kuma');
    await fillIn('#subject', 'Buying groceries');

    await fillIn('.item-list tr:first-child #itemName', 'Ghee');
    await fillIn('.item-list tr:first-child #quantity', '180');
    await fillIn('.item-list tr:first-child #rate', '1');

    assert.equal(
      this.element.querySelector('.item-list tr:first-child #amount').disabled,
      true,
      'amount column is disabled'
    )

    await click('.addItemRow');

    await fillIn('.item-list tr:last-child #itemName', 'Dhall');
    await fillIn('.item-list tr:last-child #quantity', '200');
    await fillIn('.item-list tr:last-child #rate', '1');

    await click('.create-invoice-button');

    assert.equal(
      this.element.querySelector('.container .card-body h4#invoice').textContent.trim(),
      'Invoice #1',
      'Invoice id matches'
    );

    assert.equal(
      this.element.querySelector('.container .card-body p#customerName').textContent.trim(),
      'Customer Name: bob',
      'Customer name matches'
    );

    assert.equal(
      this.element.querySelector('.container .card-body p#invoiceNumber').textContent.trim(),
      'Invoice Number: 123',
      'Invoice Number matches'
    );

    assert.equal(
      this.element.querySelector('.container .card-body p#orderNo').textContent.trim(),
      'Order No: 234',
      'Order No matches'
    );

  })
});
