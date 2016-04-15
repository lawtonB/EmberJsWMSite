import Ember from 'ember';

export function linkHider(params) {
  var link = params[0]
  if (link==null){
    return "hide-link";
  }
  else if (link.length === 0){
    return "hide-link";
  }
  else {
    return "show-link";
  }
}

export default Ember.Helper.helper(linkHider);
