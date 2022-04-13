import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pokemon/view-error', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pokemon/view-error');
    assert.ok(route);
  });
});
