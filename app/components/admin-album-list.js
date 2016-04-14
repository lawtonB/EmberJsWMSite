import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewAlbum(params){
      this.sendAction('saveNewAlbum', params);
    },
    editAlbum(album){
      this.sendAction('editAlbum', album);
    },
    deleteAlbum(album){
      this.sendAction('deleteAlbum', album);
    },
    saveNewSong(params){
      this.sendAction('saveNewSong', params);
    },
    deleteSong(song){
      this.sendAction('deleteSong', song);
    },
    editSong(song){
      this.sendAction('editSong', song);
    }
  }
});
