import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewPress(params){
      this.sendAction('saveNewPress', params);
    },
    editPress(pressclip){
      this.sendAction('editPress', pressclip);
    },
    deletePress(pressclip){
      this.sendAction('deletePress', pressclip);
    }
  }
});
