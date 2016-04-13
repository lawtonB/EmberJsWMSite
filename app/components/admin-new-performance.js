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
        venue: this.get('venue') ? this.get('venue'): null,
        address: this.get('address') ? this.get('address'): null,
        date: this.get('date') ? this.get('date'): null,
        confederates: this.get('confederates') ? this.get('confederates'): null,
      };

      this.set('addNewPerformance', false);
      this.set('venue', "");
      this.set('address', "");
      this.set('date', "");
      this.set('confederates', "");

      this.sendAction('saveNewPerformance', params);
    }
  }
});
