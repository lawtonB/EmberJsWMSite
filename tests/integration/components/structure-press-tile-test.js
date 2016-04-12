import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('structure-press-tile', 'Integration | Component | structure press tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{structure-press-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#structure-press-tile}}
      template block text
    {{/structure-press-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
