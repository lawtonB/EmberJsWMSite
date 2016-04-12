import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewAlbum(params){
      this.sendAction('saveNewAlbum', params);
    }
  }
});
