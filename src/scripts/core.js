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
  'attackers': {
    'textures': {
      'obj1': "assets/img/sprite-invader.jpg"
    },
    'fleet': null,
    'fleetDirection': -1,
    'fleetMaxX': 0,
    'fleetWalkDown': 0,
    'fleetMotionSpeed': 2,
    'ships': [],
    'update': function() {
      var threshold = gameCore.attackers.fleet.position.x + gameCore.attackers.fleet.width;
      if (threshold > gameCore.screenWidth || gameCore.attackers.fleet.position.x < 0) {
        gameCore.attackers.fleetDirection = gameCore.attackers.fleetDirection * (-1);
        gameCore.attackers.fleet.position.y = gameCore.attackers.fleet.position.y + 100;
      } else {
        gameCore.attackers.fleet.position.y = gameCore.attackers.fleet.position.y;
      }
      var motion = (gameCore.attackers.fleetDirection === -1) ? gameCore.attackers.fleetMotionSpeed : gameCore.attackers.fleetMotionSpeed * (-1);
      gameCore.attackers.fleet.position.x = gameCore.attackers.fleet.position.x + motion;
    }

  },
  'defenders': {
    'textures': {
      'obj1': "assets/img/sprite-defender.jpg"
    },
    'ships': [],
    'defendersDirection': -1,
    'defendersMotionSpeed': 10,
    'update': function() {
      this.ships[0].position.x = this.ships[0].position.x + (this.defendersMotionSpeed *this.defendersDirection);
      if (this.ships[0].position.x < 0|| this.ships[0].position.x > (gameCore.screenWidth - 32)) {
        this.defendersDirection = this.defendersDirection * (-1);
      }
    }
  },
  'shots': {
    'textures': {
      'shot1': "assets/img/sprite-shot.jpg"
    },
    'elements': [],
    'update': function () {
      for (var i = 0; i < gameCore.shots.elements.length; i++) {
        gameCore.shots.elements[i].position.y = gameCore.shots.elements[i].position.y - 15;
        if (gameCore.shots.elements[i].position.y < 0) {
          gameCore.stage.removeChild(gameCore.shots.elements[i]);
        }
      }
    },
    'speed': 300
  },
  'rasterSize': 100,
  'raster': [10, 5],
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

    var invaderTexture = PIXI.Texture.fromImage(gameCore.attackers.textures.obj1);
    var invader1 = new PIXI.Sprite(invaderTexture);
    gameCore.attackers.fleet = new PIXI.Container();

    var farTexture2 = PIXI.Texture.fromImage("assets/img/sprite-invader.jpg");
    var farTexture3 = PIXI.Texture.fromImage(gameCore.defenders.textures.obj1);


    // Attacker setup

    for (var y = 0; y < gameCore.raster[1]; y++) {
      for (var x = 0; x < gameCore.raster[0]; x++) {
        var actual = (x + 1) * (y + 1);
        gameCore.attackers.ships[actual] = new PIXI.Sprite(farTexture2);
        gameCore.attackers.ships[actual].position.x = (x * gameCore.rasterSize);
        gameCore.attackers.ships[actual].position.y = (y * gameCore.rasterSize);
        gameCore.attackers.fleet.addChild(gameCore.attackers.ships[actual]);
        gameCore.stage.addChild(gameCore.attackers.fleet);
      }
      gameCore.attackers.fleetMaxX = gameCore.screenWidt - gameCore.attackers.fleet.width;


      // Defender setup

      gameCore.defenders.ships[0] = new PIXI.Sprite(farTexture3);
      gameCore.defenders.ships[0].position.x = (gameCore.screenWidth / 2) - 32;
      gameCore.defenders.ships[0].position.y = gameCore.screenHeight - 200;
      gameCore.stage.addChild(gameCore.defenders.ships[0]);
    }

    setInterval(gameCore.shoot, gameCore.shots.speed);
    requestAnimationFrame(gameCore.update);
  },

  'shoot': function () {
    var farTexture4 = PIXI.Texture.fromImage(gameCore.shots.textures.shot1);

    gameCore.shots.elements.push(new PIXI.Sprite(farTexture4));
    gameCore.shots.elements[gameCore.shots.elements.length - 1].position.x = gameCore.defenders.ships[0].position.x + 36;
    gameCore.shots.elements[gameCore.shots.elements.length - 1].position.y = gameCore.defenders.ships[0].position.y - 30;
    gameCore.stage.addChild(gameCore.shots.elements[gameCore.shots.elements.length - 1]);
  },

  'update': function () {
    gameCore.attackers.update();
    gameCore.shots.update();
    gameCore.defenders.update();
    gameCore.renderer.render(gameCore.stage);
    requestAnimationFrame(gameCore.update);
  }
};

export { gameCore }