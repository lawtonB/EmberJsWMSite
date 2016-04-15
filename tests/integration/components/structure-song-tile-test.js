import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('structure-song-tile', 'Integration | Component | structure song tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{structure-song-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#structure-song-tile}}
      template block text
    {{/structure-song-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
