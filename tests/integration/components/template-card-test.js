import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | template-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
      <TemplateCard
        @imgSrc="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
        @cardBody="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit"
      />`
    );

    assert.equal(
      this.element.querySelector('.card-title').textContent.trim(),
      'Template #1',
      'Card title renders properly'
    );

    assert.equal(
      this.element.querySelector('img').getAttribute('src'),
      'https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png',
      'src attr of image is correct'
    );


    assert.equal(
      this.element.querySelector('.card-text').textContent.trim(),
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit',
      'text content of template-card body is correct'
    )

  });
});
