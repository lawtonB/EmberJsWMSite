import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  length: DS.attr(),
  composer: DS.attr(),
  lyricist: DS.attr(),
  lyrics: DS.attr(),
  recording: DS.attr(),
  album: DS.belongsTo(),
  video: DS.belongsTo()
});
