import Ember from 'ember';

export default Ember.Component.extend({
  categorySelect: Ember.inject.service(),

  actions: {
    selectCategory(category) {
      this.get('categorySelect').selectCategory(category);
    }
  }
});
