import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('album');
    }
  });




//   model(){
//     return this.store.findAll('album');
//   }
// })
