/**
 * Created by christianmadlener on 17.11.16.
 */

var sceneManager = {
  "launch": function (scene) {
    var shownObject;
    var globalScene = scene;
    console.log("scenemanager / launch scene:", scene);
    if (document.querySelectorAll(".scene.shown").length) {
      shownObject = document.querySelector(".scene.shown");
      shownObject.classList.add("fadeOut");
      shownObject.addEventListener("webkitTransitionEnd", function () {
        document.querySelectorAll(".scene").forEach(function (el) {
          el.classList.remove("fadeOut");
        });
        document.querySelector(".scene.shown").classList.remove("shown");
        document.querySelector("#" + globalScene).classList.add("shown");
      });
    } else {
      document.querySelector("#" + globalScene).classList.add("shown");
    }
  }
};

document.querySelectorAll("li").forEach(function (el) {
  el.addEventListener("click", function (cel) {
    sceneManager.launch(cel.currentTarget.dataset.scene);
  });
});


export { sceneManager }