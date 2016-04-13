import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-edit-artwork', 'Integration | Component | admin edit artwork', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-edit-artwork}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-edit-artwork}}
      template block text
    {{/admin-edit-artwork}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
