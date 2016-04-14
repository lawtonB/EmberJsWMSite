import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAlbum(album){
      this.set('editAlbumForm', false);
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
