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
  'defenders': [],
  'defendersDirection': -1,
  'defendersMotionSpeed': 2,
  'rasterSize': 100,
  'raster': [10, 5],
  'maxAttackers': 50,
  'fleet': null,
  'fleetDirection': -1,
  'fleetMaxX': 0,
  'fleetWalkDown': 0,
  'fleetMotionSpeed': 2,
  'shots': [],
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
  'defShoot': function (position) {
    gameCore.shots.push(position);
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
    var farTexture = PIXI.Texture.fromImage("assets/img/bg-space-1.jpg");
    var far = new PIXI.Sprite(farTexture);
    gameCore.fleet = new PIXI.Container();
    gameCore.stage.addChild(far);

    var farTexture2 = PIXI.Texture.fromImage("assets/img/sprite-invader.jpg");
    var farTexture3 = PIXI.Texture.fromImage("assets/img/sprite-defender.jpg");


    for (var y = 0; y < gameCore.raster[1]; y++) {
      for (var x = 0; x < gameCore.raster[0]; x++) {
        var actual = (x + 1) * (y + 1);
        gameCore.attackers[actual] = new PIXI.Sprite(farTexture2);
        gameCore.attackers[actual].position.x = (x * gameCore.rasterSize);
        gameCore.attackers[actual].position.y = (y * gameCore.rasterSize);
        gameCore.fleet.addChild(gameCore.attackers[actual]);
        gameCore.stage.addChild(gameCore.fleet);
      }
      gameCore.defenders[0] = new PIXI.Sprite(farTexture3);
      gameCore.defenders[0].position.x = (gameCore.screenWidth / 2) - 32;
      gameCore.defenders[0].position.y = gameCore.screenHeight - 200;
      gameCore.stage.addChild(gameCore.defenders[0]);
    }
    gameCore.fleetMaxX = gameCore.screenWidt - gameCore.fleet.width;
    setInterval(gameCore.shoot, 200);
    requestAnimationFrame(gameCore.update);
  },
  'shoot': function () {
    console.log("shot");
    var farTexture4 = PIXI.Texture.fromImage("assets/img/sprite-shot.jpg");

    gameCore.shots.push(new PIXI.Sprite(farTexture4));
    gameCore.shots[gameCore.shots.length - 1].position.x = gameCore.defenders[0].position.x + 36;
    gameCore.shots[gameCore.shots.length - 1].position.y = gameCore.defenders[0].position.y - 30;
    gameCore.stage.addChild(gameCore.shots[gameCore.shots.length - 1]);
  },
  'update': function () {
    // fleet
    var threshold = gameCore.fleet.position.x + gameCore.fleet.width;
    if (threshold > gameCore.screenWidth || gameCore.fleet.position.x < 0) {
      gameCore.fleetDirection = gameCore.fleetDirection * (-1);
      gameCore.fleet.position.y = gameCore.fleet.position.y + 100;
    } else {
      gameCore.fleet.position.y = gameCore.fleet.position.y;
    }
    var motion = (gameCore.fleetDirection === -1) ? gameCore.fleetMotionSpeed : gameCore.fleetMotionSpeed * (-1);
    gameCore.fleet.position.x = gameCore.fleet.position.x + motion;


    // defender

    //shots
    for (var i = 0; i < gameCore.shots.length; i++) {
      gameCore.shots[i].position.y = gameCore.shots[i].position.y - 15;
      if (gameCore.shots[i].position.y < 0) {
        gameCore.stage.removeChild(gameCore.shots[i]);
      }
    }
    // main
    gameCore.renderer.render(gameCore.stage);
    requestAnimationFrame(gameCore.update);

    // shots
  }
};

export { gameCore }