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
    },
    editAlbum(album){
      this.sendAction('editAlbum', album);
    },
    deleteAlbum(album){
      this.sendAction('deleteAlbum', album);
    },
    editArtwork(artwork){
      this.sendAction('editArtwork', artwork);
    },
    deleteArtwork(artwork){
      this.sendAction('deleteArtwork', artwork);
    },
    editPerformance(performance){
      this.sendAction('editPerformance', performance);
    },
    deletePerformance(performance){
      this.sendAction('deletePerformance', performance);
    },
    editPress(pressclip){
      this.sendAction('editPress', pressclip);
    },
    deletePress(pressclip){
      this.sendAction('deletePress', pressclip);
    },
    editProduct(product){
      this.sendAction('editProduct', product);
    },
    deleteProduct(product){
      this.sendAction('deleteProduct', product);
    },
    editSong(song){
      this.sendAction('editSong', song);
    },
    deleteSong(song){
      this.sendAction('deleteSong', song);
    },
    editVideo(video){
      this.sendAction('editVideo', video);
    },
    deleteVideo(video){
      this.sendAction('deleteVideo', video);
    }
  }
});
