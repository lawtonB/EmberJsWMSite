import DS from 'ember-data';

export default DS.Model.extend({
  song: DS.belongsTo(),
  director: DS.attr(),
  link: DS.attr()
});
