import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invoices/create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:invoices/create');
    assert.ok(route);
  });
});
