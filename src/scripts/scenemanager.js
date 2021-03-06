/**
 * Created by christianmadlener on 17.11.16.
 */

var sceneManager = {
  "launch": function (scene) {
    var globalScene = scene;
    gameAudio.quiet();
    if (document.querySelectorAll(".scene.shown").length) {
      gameAudio.fadeOut();
      document.querySelector(".scene.shown").classList.remove("shown");
      document.querySelector("#" + globalScene).classList.add("shown");
    } else {
      document.querySelector("#" + globalScene).classList.add("shown");
    }
    gameAudio.play(gameAudio.playList[globalScene], false);
    if(scene==="run") {
      gameCore.gameInit();
    }
  }
};

document.querySelectorAll(".titleList .menu").forEach(function (el) {
  el.addEventListener("click", function (cel) {
    sceneManager.launch(cel.currentTarget.dataset.scene);
  });
});


export { sceneManager }