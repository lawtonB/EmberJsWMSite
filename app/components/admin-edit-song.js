import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editSongForm() {
      this.set('editSongForm', true);
    },
    hideEditForm(){
      this.set('editSongForm', false);
    },
    editSong(song){

      var audioFile = document.getElementById('recording').files[0];
      var reader = new FileReader();
      var audioData= "";
      if(audioFile)
      {
        reader.readAsDataURL(audioFile);
        var self = this;
        reader.addEventListener("load", function() {
          audioData = reader.result;
          self.set('song.recording', audioData);
          self.set('editSongForm', false);
          self.sendAction('editSong', song);
        }, false);
      }
      else {
        this.set('editSongForm', false);
        this.sendAction('editSong', song);
      }
    },
    deleteSong(song){
      this.sendAction('deleteSong', song);
    }
  }
});
