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
        title: this.get('title') ? this.get('title'): null,
        author: this.get('author') ? this.get('author'): null,
        text: this.get('text') ? this.get('text'): null,
        publication: this.get('publication') ? this.get('publication'): null,
        date: this.get('date') ? this.get('date'): null,
        link: this.get('link') ? this.get('link'): null
      };

      this.set('addNewPress', false);
      this.set('title', "");
      this.set('author', "");
      this.set('text', "");
      this.set('publication', "");
      this.set('date', "");
      this.set('link', "");

      this.sendAction('saveNewPress', params);
    }
  }
});
