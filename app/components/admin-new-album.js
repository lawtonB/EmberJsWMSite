import Ember from 'ember';

export default Ember.Component.extend({
  addNewAlbum: false,
  actions: {
    showAlbumForm() {
      this.set('addNewAlbum', true);
    },
    dontSaveAlbum(){
      this.set('addNewAlbum', false);
      this.set('title', "");
      this.set('releaseDate', "");
      this.set('cover', "");
      this.set('label', "");
    },
    saveNewAlbum(){


      var coverImage = document.getElementById('cover').files[0];
      var reader = new FileReader();
      var imageData= "";
      reader.readAsDataURL(coverImage);
      var self = this;
      reader.addEventListener("load", function() {
        imageData = reader.result;

        var params = {
          title: self.get('title') ? self.get('title'): null,
          releaseDate: self.get('date') ? self.get('date'): null,
          cover: imageData,
          label: self.get('label') ? self.get('label'): null,
        };
        self.set('addNewAlbum', false);
        self.set('title', "");
        self.set('releaseDate', "");
        self.set('cover', "");
        self.set('label', "");

        self.sendAction('saveNewAlbum', params);

        }, false);


    }
  }
});
