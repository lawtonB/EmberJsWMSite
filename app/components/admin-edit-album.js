import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editAlbumForm() {
      this.set('editAlbumForm', true);
    },
    hideEditForm(){
      this.set('editAlbumForm', false);
    },
    editAlbum(album){
      this.set('editAlbumForm', false);
      this.sendAction('editAlbum', album);
    },
    deleteAlbum(album){
      this.sendAction('deleteAlbum', album);
    }
  }

});
