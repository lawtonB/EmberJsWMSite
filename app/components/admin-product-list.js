import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewProduct(params){
      this.sendAction('saveNewProduct', params);
    },
    editProduct(product){
      this.sendAction('editProduct', product);
    },
    deleteProduct(product){
      this.sendAction('deleteProduct', product);
    }
  }
});
