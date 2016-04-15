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

  hasRecording: Ember.computed('recording', function(){
    if (this.get('recording') == null){
      return false;
    }
    else if(this.get('recording').length > 0){
    return true;
    }
    else {
      return false;
    }
  }),

  hasNoLink: Ember.computed('videoLink', function(){

    if(this.get('videoLink')== null){
      return true;
    }
    else if(this.get('videoLink').length > 0){
      return false;
    }
    else {
      return true;
    }
  })

});
