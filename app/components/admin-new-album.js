import Ember from 'ember';

export default Ember.Component.extend({
  addNewAlbum: false,
  actions: {
    showAlbumForm() {
      this.set('addNewAlbum', true);
    },
    dontSaveAlbum(){
      this.set('addNewAlbum', false);
      this.set('title', "");
      this.set('releaseDate', "");
      this.set('cover', "");
      this.set('label', "");
    },
    saveNewAlbum(){
      var params = {
        title: this.get('title'),
        releaseDate: this.get('releaseDate'),
        cover: this.get('cover'),
        label: this.get('label'),
      };
      this.set('addNewAlbum', false);
      this.sendAction('saveNewAlbum', params);
    }
  }
});
