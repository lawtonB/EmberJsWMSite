import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    showProductForm() {
      this.set('addNewProduct', true);
    },
    dontSaveProduct(){
      this.set('addNewProduct', false);
      this.set('number', "");
      this.set('name', "");
      this.set('image', "");
      this.set('description', "");
      this.set('dollars', "");
      this.set('cents', "");
    },
    saveNewProduct(){
      if (this.get('cents')===undefined){
        this.set('cents',"0");
      }
      else if(this.get('cents').length===0) {
        this.set('cents',"0");
      }
      if (this.get('dollars')===undefined){
        this.set('dollars',"0");
      }
      else if(this.get('dollars').length===0) {
        this.set('dollars',"0");
      }
      var image = document.getElementById('productImage').files[0];
      var reader = new FileReader();
      var imageData= "";
      reader.readAsDataURL(image);
      var self = this;
      reader.addEventListener("load", function() {
        imageData = reader.result;

      var correctPrice = parseInt(self.get('dollars')) * 100 + parseInt(self.get('cents'));
      var params = {
        number: self.get('number'),
        name: self.get('name'),
        description: self.get('description'),
        image: imageData,
        price: correctPrice
      };

      self.set('addNewProduct', false);
      self.set('number', "");
      self.set('name', "");
      self.set('description', "");
      self.set('image', "");
      self.set('dollars', "");
      self.set('cents', "");

      self.sendAction('saveNewProduct', params);

      }, false);
    }
  }
});
