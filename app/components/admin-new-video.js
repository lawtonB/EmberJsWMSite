import Ember from 'ember';

export default Ember.Component.extend({
  addNewVideo: false,
  actions: {
    showVideoForm() {
      this.set('addNewVideo', true);
    },
    dontSaveVideo(){
      this.set('addNewVideo', false);
      this.set('director', "");
      this.set('link', "");
    },
    saveNewVideo(){
      var params = {
        director: this.get('director'), ? this.get('director'): null
        link: this.get('link'), ? this.get('link'): null
      };

      this.set('addNewVideo', false);
      this.set('director', "");
      this.set('link', "");

      this.sendAction('saveNewVideo', params);
    }
  }
});
