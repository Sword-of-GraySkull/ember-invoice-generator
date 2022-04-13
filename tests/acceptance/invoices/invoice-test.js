import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | invoices/invoice', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /invoices/invoice', async function(assert) {
    await visit('/invoices/invoice');

    assert.equal(currentURL(), '/invoices/invoice');
  });
});
