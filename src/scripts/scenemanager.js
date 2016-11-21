/**
 * Created by christianmadlener on 17.11.16.
 */

var sceneManager = {
  "launch": function(scene){
    console.log("launch scene", scene);
  }
}

document.querySelectorAll("li").forEach(function (el) {
  el.addEventListener("click", function (cel) {
    sceneManager.launch(cel.currentTarget.dataset.scene);
  });
});

export { sceneManager }