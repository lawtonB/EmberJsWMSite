import Ember from 'ember';

export default Ember.Component.extend({
  categorySelect: Ember.inject.service(),

  actions: {
    saveNewAlbum(params){
      this.sendAction('saveNewAlbum', params);
    }
  }
});
