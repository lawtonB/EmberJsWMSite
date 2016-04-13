import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewSong(params){
      this.sendAction('saveNewSong', params);
    },
    editSong(song){
      this.sendAction('editSong', song);
    },
    deleteSong(song){
      this.sendAction('deleteSong', song);
    }
  }
});
