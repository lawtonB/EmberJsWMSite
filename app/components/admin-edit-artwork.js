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
      this.set('editArtworkForm', false);
      this.sendAction('editArtwork', artwork);
    },
    deleteArtwork(artwork){
      this.sendAction('deleteArtwork', artwork);
    }
  }

});
