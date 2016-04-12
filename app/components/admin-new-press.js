import Ember from 'ember';

export default Ember.Component.extend({
  addNewPress: false,
  actions: {
    showPressForm() {
      this.set('addNewPress', true);
    },
    dontSavePress(){
      this.set('addNewPress', false);
      this.set('title', "");
      this.set('author', "");
      this.set('text', "");
      this.set('publication', "");
      this.set('date', "");
      this.set('link', "");
    },
    saveNewPress(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        publication: this.get('publication'),
        date: this.get('date'),
        link: this.get('link')
      };
      this.set('addNewPress', false);
      this.sendAction('saveNewPress', params);
    }
  }
});
