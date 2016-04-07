import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  release: DS.attr(),
  image: DS.attr()
});
