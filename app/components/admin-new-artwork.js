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
        title: this.get('title'),
        artist: this.get('artist'),
        image: this.get('image'),
        notes: this.get('notes'),
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
