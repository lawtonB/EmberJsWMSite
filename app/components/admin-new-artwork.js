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
      var params = {
        title: this.get('title') ? this.get('title'): null,
        artist: this.get('artist') ? this.get('artist'): null,
        image: this.get('image') ? this.get('image'): null,
        notes: this.get('notes') ? this.get('notes'): null
      };

      this.set('addNewArtwork', false);
      this.set('title', "");
      this.set('artist', "");
      this.set('image', "");
      this.set('notes', "");

      this.sendAction('saveNewArtwork', params);
    }
  }
});
