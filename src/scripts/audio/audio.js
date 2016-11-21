var gameAudio = {};
gameAudio.jukeBox = {};
gameAudio.volume = {};
gameAudio.volume.sfx = 1;
gameAudio.volume.music = 1;
gameAudio.audioCounter = 0;
gameAudio.audioPath = "assets/audio/";
gameAudio.verbose = true;



function reqListener(e) {
  gameAudio.files = JSON.parse(this.responseText);
}

gameAudio.setVolume = function (audioType, volume) {
  if (audioType === "sfx" || audioType === "music") {
    if (volume < 0) volume = 0;
    if (volume > 1) volume = 1;
    this.volume[audioType] = volume;
    Object.keys(this.jukeBox).map(function (el) {
      if (gameAudio.files[el].type === audioType) {
        gameAudio.jukeBox[el].volume = volume;
      }
    });
    gameAudio.tattler("Volume for " + audioType + " was set to " + volume);
  }
};

gameAudio.getVolume = function (audioType) {
  return this.volume[audioType];
};

gameAudio.isPlaying = function (soundFile) {
  if (this.jukeBox[soundFile] === undefined) {
    return false;
  }
  else {
    return (gameAudio.jukeBox[soundFile].paused) ? false : true;
  }
};

gameAudio.getPosition = function (soundFile) {
  return Math.floor(this.jukeBox[soundFile].currentTime);
};

gameAudio.setPosition = function (soundFile, audioPosition) {
  this.jukeBox[soundFile].currentTime = audioPosition;
  gameAudio.tattler(soundFile + " was set to Position " + audioPosition);
};

gameAudio.play = function (soundFile, playAsLoop) {
  var gameAudioType = this.files[soundFile].type;
  var actualAudioPath = this.audioPath + ((gameAudioType === "sfx") ? "sfx" : "music" ) + "/" + this.files[soundFile].file;
  var tmpName = soundFile + gameAudio.audioCounter;
  gameAudio.audioCounter++;
  this.jukeBox[tmpName] = new Audio(actualAudioPath);
  if (playAsLoop) this.jukeBox[soundFile].loop = true;
  this.jukeBox[tmpName].play();
  gameAudio.tattler(tmpName + " has started");
  this.jukeBox[tmpName].volume = (this.files[soundFile].type == "sfx") ? this.volume.sfx : this.volume.music;
  this.jukeBox[tmpName].addEventListener("ended", function (activeAudioElement) {
    gameAudio.tattler(tmpName + " has ended");
    delete gameAudio.jukeBox[tmpName];
  })
};

gameAudio.stop = function (soundFile) {
  this.jukeBox[soundFile].pause();
  delete gameAudio.jukeBox[soundFile];
  gameAudio.tattler(soundFile + " was stopped.");
};

gameAudio.quiet = function () {
  Object.keys(this.jukeBox).map(function (el) {
    gameAudio.stop(el);
  });

};

gameAudio.tattler = function (gossip) {
  if (this.verbose) {
    console.log("gameAudio / ", gossip);
  }
};

(gameAudio.load = function () {
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", gameAudio.audioPath + "audiofiles.json", true);
  oReq.send();
  gameAudio.tattler("Audio data loaded");
})();

export {gameAudio}
