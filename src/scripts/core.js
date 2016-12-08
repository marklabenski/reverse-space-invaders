/**
 * Created by christianmadlener on 15.11.16.
 *
 *
 */

var gameCore = {
  'screenWidth': 0,
  'screenHeight': 0,
  'index': 0,
  'tasks': [],
  'events': [],
  'sprites': [],
  'sceneBackgrounds': [],
  'stage': null,
  'renderer': null,
  'attackers': [],
  'rasterSize': 100,
  'raster': [10,5],
  'maxAttackers': 50,
  'addTask': function (id, interval, task) {
  },
  'removeTask': function (id) {
  },
  'getTasks': function () {
  },
  '_executeTask': function () {
  },
  'addEvent': function () {
  },
  'getScreenSize': function () {
    gameCore.screenWidth = window.innerWidth;
    gameCore.screenHeight = window.innerHeight;
  },
  'gameInit': function () {
    gameCore.getScreenSize();
    gameCore.stage = new PIXI.Container();
    gameCore.renderer = PIXI.autoDetectRenderer(
      this.screenWidth,
      this.screenHeight,
      {
        view: document.getElementById("invaderCanvas")
      }
    );
    var farTexture = PIXI.Texture.fromImage("assets/img/bg-1.jpg");
    var far = new PIXI.Sprite(farTexture);
    gameCore.stage.addChild(far);

    var farTexture2 = PIXI.Texture.fromImage("assets/img/dummy-invader1.jpg");
    for (var y = 0; y < gameCore.raster[1]; y++) {
      for (var x = 0; x < gameCore.raster[0]; x++) {
        var actual = (x+1)*(y+1);
        gameCore.attackers[actual] = new PIXI.Sprite(farTexture2);
        gameCore.attackers[actual].position.x = (x * gameCore.rasterSize);
        gameCore.attackers[actual].position.y = (y * gameCore.rasterSize);
        gameCore.stage.addChild(gameCore.attackers[actual]);
      }
    }

    gameCore.renderer.render(gameCore.stage);

    requestAnimationFrame(gameCore.update);
  },
  'update': function () {
    /*
    for (var i = 1; i< gameCore.maxAttackers; i++)
    {
      gameCore.attackers[i].position.x = (x * gameCore.rasterSize) + 0.1;
      gameCore.attackers[i].position.y = (y * gameCore.rasterSize);
    }
    */
    gameCore.renderer.render(gameCore.stage);
    requestAnimationFrame(gameCore.update);
  }
};

export { gameCore }