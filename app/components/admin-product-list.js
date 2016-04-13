import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewProduct(params){
      this.sendAction('saveNewProduct', params);
    }
  }
});
