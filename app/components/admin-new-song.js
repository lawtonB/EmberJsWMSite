import Ember from 'ember';

export default Ember.Component.extend({
  addNewSong: false,
  actions: {
    showSongForm() {
      this.set('addNewSong', true);
    },
    dontSaveSong(){
      this.set('addNewSong', false);
      this.set('title', "");
      this.set('length', "");
      this.set('writer', "");
      this.set('lyrics', "");
      this.set('recording', "");
    },
    saveNewSong(){
      var params = {
        title: this.get('title') ? this.get('title'): null,
        length: this.get('length') ? this.get('length'): null,
        writer: this.get('writer') ? this.get('writer'): null,
        lyrics: this.get('lyrics') ? this.get('lyrics'): null,
        recording: this.get('recording') ? this.get('recording'): null,
      };

      this.set('addNewSong', false);
      this.set('title', "");
      this.set('length', "");
      this.set('writer', "");
      this.set('lyrics', "");
      this.set('recording', "");

      this.sendAction('saveNewSong', params);
    }
  }
});
