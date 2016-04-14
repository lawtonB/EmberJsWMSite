import Ember from 'ember';

export default Ember.Component.extend({
  addNewArtwork: false,
  actions: {
    showArtworkForm() {
      this.set('addNewArtwork', true);
    },
    dontSaveArtwork(){
      this.set('addNewArtwork', false);
      this.set('title', "");
      this.set('artist', "");
      this.set('image', "");
      this.set('notes', "");
    },
    saveNewArtwork(){


      var artworkImage = document.getElementById('image').files[0];
      var reader = new FileReader();
      var imageData= "";
      reader.readAsDataURL(artworkImage);
      var self = this;
      reader.addEventListener("load", function() {
        imageData = reader.result;

        var params = {
          title: self.get('title') ? self.get('title'): null,
          artist: self.get('artist') ? self.get('artist'): null,
          image: imageData,
          notes: self.get('notes') ? self.get('notes'): null,
        };
        self.set('addNewArtwork', false);
        self.set('title', "");
        self.set('artist', "");
        self.set('image', "");
        self.set('notes', "");

        self.sendAction('saveNewArtwork', params);
        }, false);

    }
  }
});
