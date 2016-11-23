/**
 * Created by christianmadlener on 15.11.16.
 *
 * TODO:  - timeout functionality
 *        - check for already existing tasks on creation
 *
 */

var gameCore = {
  'out': function(shout) {
    console.log(shout);
  }
};
gameCore.tick = {
  'speed': 100,
  'pulse': 0,
  'index': 0,
  'taskSheet': {
    'tasks': [],
    'add': function (task, interval) {
      var index = gameCore.tick.index;
      gameCore.tick.taskSheet.tasks[index] = [task, interval]
      console.log(gameCore.tick.taskSheet.tasks[index]);
      gameCore.tick.index += 1;
      return gameCore.tick.index;
    },
    'remove': function (task) {
      //delete gameCore.tick.taskSheet.tasks[task]
    },
    '_execute': function () {
      Object.keys(gameCore.tick.taskSheet.tasks).map(function (el) {

        var func = el;
        var value = gameCore.tick.taskSheet.tasks[el];
        if (gameCore.tick.pulse % value === 0) {
          window.gameAudio[el]();
        }
      });
    }
  },
  'worker': function () {
    gameCore.tick.pulse+=gameCore.tick.speed;
    gameCore.tick.taskSheet._execute();
  }
};

//var alive = setInterval(gameCore.tick.worker, gameCore.tick.speed);
export { gameCore }