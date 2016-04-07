import DS from 'ember-data';

export default DS.Model.extend({
  venue: DS.attr(),
  address: DS.attr(),
  date: DS.attr()
});
