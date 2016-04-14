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
    saveNewSong(album){

      var audioFile = document.getElementById('recording').files[0];
      var reader = new FileReader();
      var audioData= "";

      if(audioFile)
      {
        reader.readAsDataURL(audioFile);
        var self = this;
        reader.addEventListener("load", function() {
          audioData = reader.result;

          var params = {
            title: self.get('title') ? self.get('title'): null,
            length: self.get('length') ? self.get('length'): null,
            writer: self.get('writer') ? self.get('writer'): null,
            lyrics: self.get('lyrics') ? self.get('lyrics'): null,
            videoLink: self.get('videoLink') ? self.get('videoLink'): null,
            recording: audioData,
            album: album
          };
          self.set('addNewSong', false);
          self.set('title', "");
          self.set('length', "");
          self.set('writer', "");
          self.set('lyrics', "");
          self.set('recording', "");
          self.set('videoLink', "");

          self.sendAction('saveNewSong', params);
        }, false);
      }
      else
      {
        var params = {
          title: this.get('title') ? this.get('title'): null,
          length: this.get('length') ? this.get('length'): null,
          writer: this.get('writer') ? this.get('writer'): null,
          lyrics: this.get('lyrics') ? this.get('lyrics'): null,
          videoLink: this.get('videoLink') ? this.get('videoLink') : null,
          recording: null,
          album: album
        };
        this.set('addNewSong', false);
        this.set('title', "");
        this.set('length', "");
        this.set('writer', "");
        this.set('lyrics', "");
        this.set('videoLink', "");
        this.set('recording', "");

        this.sendAction('saveNewSong', params);
      }

    }
  }
});
