import Ember from 'ember';

export default Ember.Component.extend({
  addNewPerformance: false,
  actions: {
    showPerformanceForm() {
      this.set('addNewPerformance', true);
    },
    dontSavePerformance(){
      this.set('addNewPerformance', false);
      this.set('venue', "");
      this.set('address', "");
      this.set('date', "");
      this.set('confederates', "");
    },
    saveNewPerformance(){
      var params = {
        venue: this.get('venue'),
        address: this.get('address'),
        date: this.get('date'),
        confederates: this.get('confederates'),
      };
      this.set('addNewPerformance', false);
      this.sendAction('saveNewPerformance', params);
    }
  }
});
