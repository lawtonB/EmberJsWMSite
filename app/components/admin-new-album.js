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
        title: this.get('title') ? this.get('title'): null,
        releaseDate: this.get('releaseDate') ? this.get('releaseDate'): null,
        cover: this.get('cover') ? this.get('cover'): null,
        label: this.get('label') ? this.get('label'): null,
      };

      this.set('addNewAlbum', false);
      this.set('title', "");
      this.set('releaseDate', "");
      this.set('cover', "");
      this.set('label', "");

      this.sendAction('saveNewAlbum', params);
    }
  }
});
