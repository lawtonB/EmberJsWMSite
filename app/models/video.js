import DS from 'ember-data';

export default DS.Model.extend({
  director: DS.attr(),
  link: DS.attr()
});
