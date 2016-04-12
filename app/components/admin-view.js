import Ember from 'ember';

export default Ember.Component.extend({
  categorySelect: Ember.inject.service(),

  actions: {
    saveNewAlbum(params){
      this.sendAction('saveNewAlbum', params);
    },
    saveNewArtwork(params){
      this.sendAction('saveNewArtwork', params);
    },
    saveNewPerformance(params){
      this.sendAction('saveNewPerformance', params);
    },
    saveNewPress(params){
      this.sendAction('saveNewPress', params);
    },
    saveNewProduct(params){
      this.sendAction('saveNewProduct', params);
    },
    saveNewSong(params){
      this.sendAction('saveNewSong', params);
    },
    saveNewVideo(params){
      this.sendAction('saveNewVideo', params);
    }
  }
});
