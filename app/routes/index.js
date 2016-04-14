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
  }
});
