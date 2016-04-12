import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  releaseDate: DS.attr(),
  cover: DS.attr(),
  label: DS.attr(),
  songs: DS.hasMany()
});
