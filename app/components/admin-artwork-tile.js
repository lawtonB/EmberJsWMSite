import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editArtwork(artwork){
      this.set('editArtworkForm', false);
      this.sendAction('editArtwork', artwork);
    },
    deleteArtwork(artwork){
      this.sendAction('deleteArtwork', artwork);
    }
  }
});
