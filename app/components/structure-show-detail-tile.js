import Ember from 'ember';

export default Ember.Component.extend({
  latestAlbum: Ember.computed('albums', function()){
    return this.get('album.name')
  }
});
