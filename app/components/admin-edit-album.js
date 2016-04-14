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
      var image = document.getElementById('newCover').files[0];
      var reader = new FileReader();
      var imageData= "";
      if(image)
      {
        reader.readAsDataURL(image);
        var self = this;
        reader.addEventListener("load", function() {
          imageData = reader.result;
          self.set('album.cover', imageData);
          self.set('editAlbumForm', false);
          self.sendAction('editAlbum', album);
        }, false);
      }

      else {
        this.set('editAlbumForm', false);
        this.sendAction('editAlbum', album);
      }
    },
    deleteAlbum(album){
      this.sendAction('deleteAlbum', album);
    }
  }

});
