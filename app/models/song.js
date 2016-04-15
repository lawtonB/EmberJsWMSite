import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  length: DS.attr(),
  writer: DS.attr(),
  lyrics: DS.attr(),
  recording: DS.attr(),
  videoLink: DS.attr(),
  album: DS.belongsTo(),
  video: DS.belongsTo(),
});
