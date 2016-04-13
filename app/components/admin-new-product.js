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
        number: this.get('number') ? this.get('number'): null,
        name: this.get('name') ? this.get('name'): null,
        description: this.get('description') ? this.get('description'): null,
        image: this.get('image') ? this.get('image'): null,
        price: this.get('price') ? this.get('price'): null
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
