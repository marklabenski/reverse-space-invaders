var gameAudio = {
  'files': '',
  'jukeBox': {},
  'volume': {
    'sfx': 1,
    'music': 1
  },
  audioCounter: 0,
  audioPath: "assets/audio/",
  verbose: false,
  playList: {
    'title': "music1",
    'commandpost': "music1",
    'run': "music1",
    'highscore': "music1",
    'impressum': "music1"
  },
  '_reqListener': function (e) {
    gameAudio.files = (JSON.parse(this.responseText));
  },
  'load': function () {
    var oReq = new XMLHttpRequest();
    oReq.onload = this._reqListener;
    oReq.open("get", gameAudio.audioPath + "audiofiles.json", true);
    oReq.addEventListener("load", function(){
      sceneManager.launch('title');
    })
    oReq.send();
  },
  'play': function (soundFile) {
    var gameAudioType = gameAudio.files[soundFile].type;
    var actualAudioPath = this.audioPath + ((gameAudioType === "sfx") ? "sfx" : "music" ) + "/" + this.files[soundFile].file;
    var tmpName = soundFile + "_" + gameAudio.audioCounter;
    gameAudio.audioCounter++;
    this.jukeBox[tmpName] = new Audio(actualAudioPath);
    this.jukeBox[tmpName].type = gameAudioType;
    this.jukeBox[tmpName].realName = this.files[soundFile].name;
    this.jukeBox[tmpName].play();
    console.log(tmpName + " has started");
    this.jukeBox[tmpName].volume = (this.files[soundFile].type == "sfx") ? this.volume.sfx : this.volume.music;
    this.jukeBox[tmpName].addEventListener("ended", function (activeAudioElement) {
      console.log(tmpName + " has ended");
      delete gameAudio.jukeBox[tmpName];
    })
    return tmpName;
  },
  'playAsLoop': function () {
  },
  'stop': function (soundFile) {
    this.jukeBox[soundFile].pause();
    delete gameAudio.jukeBox[soundFile];
    console.log(soundFile + " was stopped.");
  },
  'fadeOut': function () {
  },
  'fadeIn': function () {
  },
  'getVolume': function (audioType) {
    return this.volume[audioType];
  },
  'setVolume': function (audioType, volume) {
    if (audioType === "sfx" || audioType === "music") {
      if (volume < 0) volume = 0;
      if (volume > 1) volume = 1;
      this.volume[audioType] = volume;
      Object.keys(this.jukeBox).map(function (el) {
        console.log(gameAudio.jukeBox[el].type, audioType);
        if (gameAudio.jukeBox[el].type === audioType) {

          gameAudio.jukeBox[el].volume = volume;
        }
      });
      console.log("Volume for " + audioType + " was set to " + volume);
    }
  },
  'isPlaying': function (audioType) {
    Object.keys(this.jukeBox).map(function (sound) {
      if (audioType === gameAudio.jukeBox[sound].type) {
        console.log("Now playing:", sound, "(" + gameAudio.jukeBox[sound].realName + ")");
      }
    });
  },
  'getPosition': function () {
  },
  'setPosition': function () {
  },
  'quiet': function () {
    Object.keys(this.jukeBox).map(function (el) {
      gameAudio.stop(el);
    })
  }
}


export { gameAudio }