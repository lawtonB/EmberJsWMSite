import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editPressForm() {
      this.set('editPressForm', true);
    },
    hideEditForm(){
      this.set('editPressForm', false);
    },
    editPress(pressclip){
      this.set('editPressForm', false);
      this.sendAction('editPress', pressclip);
    },
    deletePress(pressclip){
      this.sendAction('deletePress', pressclip);
    }
  }

});
