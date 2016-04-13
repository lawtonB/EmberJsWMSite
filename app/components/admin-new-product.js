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
      this.set('dollars', "");
      this.set('cents', "");
    },
    saveNewProduct(){
      var correctPrice = parseInt(this.get('dollars')) * 100 + parseInt(this.get('cents'))
      var params = {
        number: this.get('number'),
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        price: correctPrice
      };

      this.set('addNewProduct', false);
      this.set('number', "");
      this.set('name', "");
      this.set('description', "");
      this.set('image', "");
      this.set('dollars', "");
      this.set('cents', "");


      this.sendAction('saveNewProduct', params);
    }
  }
});
