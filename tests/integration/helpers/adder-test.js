import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | adder', function(hooks) {
  setupRenderingTest(hooks);

  test('adds 1 if passed single parameter', async function(assert) {
    await render(hbs`{{adder 5}}`);

    assert.strictEqual(this.element.textContent, '6');
  })

  test('adds every element if passed multiple parameters', async function(assert) {
    await render(hbs`{{adder 5 10 6}}`);

    assert.strictEqual(this.element.textContent, '21');
  })

  // Replace this with your real tests.
  // test('it renders', async function(assert) {
  //   this.set('inputValue', '1234');

  //   await render(hbs`{{adder inputValue}}`);

  //   assert.equal(this.element.textContent.trim(), '1234');
  // });
});
