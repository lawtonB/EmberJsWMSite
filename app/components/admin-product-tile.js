import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editProduct(product){
      this.set('editProductForm', false);
      this.sendAction('editProduct', product);
    },
    deleteProduct(product){
      this.sendAction('deleteProduct', product);
    }
  }
});
