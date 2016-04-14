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
      this.set('confederates0', "");
      this.set('confederates1', "");
      this.set('confederates2', "");
      this.set('confederates3', "");
      this.set('confederates4', "");
    },
    saveNewPerformance(){
      var confederatesList = [];
      if (this.get('confederates0')){
        confederatesList.push(this.get('confederates0'));
      }
      if (this.get('confederates1')){
        confederatesList.push(this.get('confederates1'));
      }
      if (this.get('confederates2')){
        confederatesList.push(this.get('confederates2'));
      }
      if (this.get('confederates3')){
        confederatesList.push(this.get('confederates3'));
      }
      if (this.get('confederates4')){
        confederatesList.push(this.get('confederates4'));
      }
      confederatesList = confederatesList.join(", ");

      var params = {
        venue: this.get('venue') ? this.get('venue'): null,
        address: this.get('address') ? this.get('address'): null,
        date: this.get('date') ? this.get('date'): null,
        confederates: confederatesList ? confederatesList :null,
      };

      this.set('addNewPerformance', false);
      this.set('venue', "");
      this.set('address', "");
      this.set('date', "");
      this.set('confederates0', "");
      this.set('confederates1', "");
      this.set('confederates2', "");
      this.set('confederates3', "");
      this.set('confederates4', "");

      this.sendAction('saveNewPerformance', params);
    }
  }
});
