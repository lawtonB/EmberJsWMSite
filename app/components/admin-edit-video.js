import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editVideoForm() {
      this.set('editVideoForm', true);
    },
    hideEditForm(){
      this.set('editVideoForm', false);
    },
    editVideo(video){
      this.set('editVideoForm', false);
      this.sendAction('editVideo', video);
    },
    deleteVideo(video){
      this.sendAction('deleteVideo', video);
    }
  }

});
