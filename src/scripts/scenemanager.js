/**
 * Created by christianmadlener on 17.11.16.
 */

var sceneManager = {
  "launch": function (scene) {
    var globalScene = scene;
    console.log("scenemanager / launch scene:", scene);
    if (document.querySelectorAll(".scene.shown").length) {
      gameAudio.fadeOut();
      document.querySelector(".scene.shown").classList.remove("shown");
      document.querySelector("#" + globalScene).classList.add("shown");
    } else {
      document.querySelector("#" + globalScene).classList.add("shown");
    }
    gameAudio.play(gameAudio.playList[globalScene], false);
  }
};

document.querySelectorAll(".titleList .menu").forEach(function (el) {
  el.addEventListener("click", function (cel) {
    sceneManager.launch(cel.currentTarget.dataset.scene);
  });
});


export { sceneManager }