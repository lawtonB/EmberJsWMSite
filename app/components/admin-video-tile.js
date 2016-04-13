import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editVideo(video){
      this.set('editVideoForm', false);
      this.sendAction('editVideo', video);
    },
    deleteVideo(video){
      this.sendAction('deleteVideo', video);
    }
  }
});
