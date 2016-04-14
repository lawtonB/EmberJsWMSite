import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editArtworkForm() {
      this.set('editArtworkForm', true);
    },
    hideEditForm(){
      this.set('editArtworkForm', false);
    },
    editArtwork(artwork){
      var image = document.getElementById('newImage').files[0];
      var reader = new FileReader();
      var imageData= "";
      if(image)
      {
        reader.readAsDataURL(image);
        var self = this;
        reader.addEventListener("load", function() {
          imageData = reader.result;
          self.set('artwork.image', imageData);
          self.set('editArtworkForm', false);
          self.sendAction('editArtwork', artwork);
        }, false);
      }
      else {
        this.set('editArtworkForm', false);
        this.sendAction('editArtwork', artwork);
      }
    },
    deleteArtwork(artwork){
      this.sendAction('deleteArtwork', artwork);
    }
  }

});
