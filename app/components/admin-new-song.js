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
      this.set('video', "");
    },
    saveNewSong(){
      var params = {
        title: this.get('title'),
        length: this.get('length'),
        writer: this.get('writer'),
        lyrics: this.get('lyrics'),
        recording: this.get('recording'),
        video: this.get('video')
      };
      this.set('addNewSong', false);
      this.sendAction('saveNewSong', params);
    }
  }
});
