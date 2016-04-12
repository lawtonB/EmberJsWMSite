import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('about');
  this.route('albums');
  this.route('structure-selected-album', {path: '/structure-selected-album/:album_id'});
  this.route('artwork');
  this.route('press');
});

export default Router;
