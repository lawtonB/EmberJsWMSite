import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      albums: this.store.findAll('album'),
      artworks: this.store.findAll('artwork'),
      performances: this.store.findAll('performance'),
      pressclips: this.store.findAll('pressclip'),
      products: this.store.findAll('product'),
      songs: this.store.findAll('song'),
      videos: this.store.findAll('video')
    });
  },
  actions: {
    saveNewAlbum(params){
      var newAlbum = this.store.createRecord('album', params);
      newAlbum.save();
    },
    saveNewArtwork(params){
      var newArtwork = this.store.createRecord('artwork', params);
      newArtwork.save();
    },
    saveNewPerformance(params){
      var newPerformance = this.store.createRecord('performance', params);
      newPerformance.save();
    },
    saveNewPress(params){
      var newPress = this.store.createRecord('pressclip', params);
      newPress.save();
    },
    saveNewProduct(params){
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    },
    saveNewSong(params){
      var newSong = this.store.createRecord('song', params);
      var album = params.album;
      album.get('songs').addObject(newSong);
      newSong.save().then(function(){
        return album.save();
      });
      newSong.save();
    },
    saveNewVideo(params){
      var newVideo = this.store.createRecord('video', params);
      newVideo.save();
    },
    editAlbum(album){
      album.save();
    },
    deleteAlbum(album){
      album.destroyRecord();
    },
    editArtwork(artwork){
      artwork.save();
    },
    deleteArtwork(artwork){
      artwork.destroyRecord();
    },
    editPerformance(performance){
      performance.save();
    },
    deletePerformance(performance){
      performance.destroyRecord();
    },
    editPress(pressclip){
      pressclip.save();
    },
    deletePress(pressclip){
      pressclip.destroyRecord();
    },
    editProduct(product){
      product.save();
    },
    deleteProduct(product){
      product.destroyRecord();
    },
    editSong(song){
      song.save();
    },
    deleteSong(song){
      song.destroyRecord();
    },
    editVideo(video){
      video.save();
    },
    deleteVideo(video){
      video.destroyRecord();
    }
  }
});
