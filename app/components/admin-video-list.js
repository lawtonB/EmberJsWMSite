import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewVideo(params){
      this.sendAction('saveNewVideo', params);
    }
  }
});
