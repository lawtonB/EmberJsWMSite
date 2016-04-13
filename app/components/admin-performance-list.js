import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewPerformance(params){
      this.sendAction('saveNewPerformance', params);
    },
    editPerformance(performance){
      this.sendAction('editPerformance', performance);
    },
    deletePerformance(performance){
      this.sendAction('deletePerformance', performance);
    }
  }
});
