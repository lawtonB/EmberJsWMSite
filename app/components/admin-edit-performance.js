import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editPerformanceForm() {
      this.set('editPerformanceForm', true);
    },
    hideEditForm(){
      this.set('editPerformanceForm', false);
    },
    editPerformance(performance){
      this.set('editPerformanceForm', false);
      this.sendAction('editPerformance', performance);
    },
    deletePerformance(performance){
      this.sendAction('deletePerformance', performance);
    }
  }

});
