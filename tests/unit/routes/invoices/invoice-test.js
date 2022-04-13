import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invoices/invoice', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:invoices/invoice');
    assert.ok(route);
  });
});
