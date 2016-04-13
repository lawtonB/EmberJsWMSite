import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('structure-show-detail-tile', 'Integration | Component | structure show detail tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{structure-show-detail-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#structure-show-detail-tile}}
      template block text
    {{/structure-show-detail-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
