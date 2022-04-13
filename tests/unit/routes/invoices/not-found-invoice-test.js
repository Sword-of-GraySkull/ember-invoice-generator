import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invoices/not-found-invoice', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:invoices/not-found-invoice');
    assert.ok(route);
  });
});
