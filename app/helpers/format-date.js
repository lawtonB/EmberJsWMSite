import Ember from 'ember';

export function formatDate(params) {
  var date = params[0];
  var year = date.slice(0, -12);
  var day = date.slice(5, -6);
  // var time = date.slice(11);

  console.log(date);
  var hour = ((date.slice(0,2) + 11) % 12) + 1 + ":";
  var minute = date.slice(2, 4);
  var formatDate = hour + minute + " " + day + " " + year;
  return formatDate
  }

export default Ember.Helper.helper(formatDate);
