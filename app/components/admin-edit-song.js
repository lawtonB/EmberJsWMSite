import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editSongForm() {
      this.set('editSongForm', true);
    },
    hideEditForm(){
      this.set('editSongForm', false);
    },
    editSong(song){
      this.set('editSongForm', false);
      this.sendAction('editSong', song);
    },
    deleteSong(song){
      this.sendAction('deleteSong', song);
    }
  }

});
