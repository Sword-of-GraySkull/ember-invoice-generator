import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting / redirects to /home', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/home', 'Redirects to /home successfully');
  });

  test('visiting /home', async function(assert) {
    await visit('/home');
    assert.equal(currentURL(), '/home', 'visiting home successfully');
  });

  test('Renders Home page correctly', async function(assert) {
    await visit('/home');
    assert.equal(
      this.element.querySelector('.introduction h2').textContent.trim(),
      'Create Invoice on the go',
      'Home Page title renders correctly'
    );

    assert.equal(
      this.element.querySelector('.template-list h2').textContent.trim(),
      'Choose your Template',
      'Template title renders correctly'
    );
  });

  test('\'Use this template\' button redirects to invoices route', async function(assert) {
    await visit('/home');
    await click('.template-picker-button');
    assert.equal(currentURL(), '/invoices', 'Redirects to invoices route successfully');
  });
});
