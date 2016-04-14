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
      var image = document.getElementById('newImage').files[0];
      var reader = new FileReader();
      var imageData= "";
      if(image)
      {
        reader.readAsDataURL(image);
        var self = this;
        reader.addEventListener("load", function() {
          imageData = reader.result;
          self.set('product.image', imageData);
          self.set('editProductForm', false);
          self.sendAction('editProduct', product);
        }, false);
      }
      else {
        this.set('editProductForm', false);
        this.sendAction('editProduct', product);
      }
    },

    deleteProduct(product){
      this.sendAction('deleteProduct', product);
    }
  }

});
