import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewSong(params){
      this.sendAction('saveNewSong', params);
    }
  }
});
