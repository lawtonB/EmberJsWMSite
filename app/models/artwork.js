import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.attr(),
  image: DS.attr(),
  notes: DS.attr()
});
