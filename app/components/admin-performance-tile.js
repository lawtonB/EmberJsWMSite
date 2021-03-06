import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editPerformance(performance){
      this.sendAction('editPerformance', performance);
    },
    deletePerformance(performance){
      this.sendAction('deletePerformance', performance);
    }
  }
});
