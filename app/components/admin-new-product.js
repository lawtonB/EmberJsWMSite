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
      this.set('description', "");
      this.set('image', "");
      this.set('price', "");
    },
    saveNewProduct(){
      var params = {
        number: this.get('number'),
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        price: this.get('price')
      };

      this.set('addNewProduct', false);
      this.set('number', "");
      this.set('name', "");
      this.set('description', "");
      this.set('image', "");
      this.set('price', "");
      
      this.sendAction('saveNewProduct', params);
    }
  }
});
