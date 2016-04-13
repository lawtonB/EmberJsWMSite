import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewPerformance(params){
      this.sendAction('saveNewPerformance', params);
    }
  }
});
