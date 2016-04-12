import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  text: DS.attr(),
  publication: DS.attr(),
  date: DS.attr(),
  link: DS.attr()
});
