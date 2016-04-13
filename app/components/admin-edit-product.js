import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editProductForm() {
      this.set('editProductForm', true);
    },
    hideEditForm(){
      this.set('editProductForm', false);
    },
    editProduct(product){
      this.set('editProductForm', false);
      this.sendAction('editProduct', product);
    },
    deleteProduct(product){
      this.sendAction('deleteProduct', product);
    }
  }

});
