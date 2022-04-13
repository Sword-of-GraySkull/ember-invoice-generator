import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Footer />`);

    assert.equal(this.element.querySelector('.street').textContent.trim(), '234, Baker street', 'shows street information correctly');
    assert.equal(this.element.querySelector('.city').textContent.trim(), 'Chicago, CA', 'shows city information correctly');
    assert.equal(this.element.querySelector('p').textContent.trim(), 'Copyright ©2021');
  });
});
