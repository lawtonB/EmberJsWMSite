import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-edit-performance', 'Integration | Component | admin edit performance', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-edit-performance}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-edit-performance}}
      template block text
    {{/admin-edit-performance}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
