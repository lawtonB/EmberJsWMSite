import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editPress(pressclip){
      this.set('editPressForm', false);
      this.sendAction('editPress', pressclip);
    },
    deletePress(pressclip){
      this.sendAction('deletePress', pressclip);
    }
  }
});
