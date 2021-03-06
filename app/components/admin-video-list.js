import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewVideo(params){
      this.sendAction('saveNewVideo', params);
    },
    editVideo(video){
      this.sendAction('editVideo', video);
    },
    deleteVideo(video){
      this.sendAction('deleteVideo', video);
    }
  }
});
