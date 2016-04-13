import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewArtwork(params){
      this.sendAction('saveNewArtwork', params);
    }
  }
});
