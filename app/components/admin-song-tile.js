import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editSong(song){
      this.set('editSongForm', false);
      this.sendAction('editSong', song);
    },
    deleteSong(song){
      this.sendAction('deleteSong', song);
    }
  }
});
