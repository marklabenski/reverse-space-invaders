/**
 * Created by christianmadlener on 15.11.16.
 *
 * TODO:  - timeout functionality
 *        - check for already existing tasks on creation
 *
 */

var gameCore = {};
gameCore.tick = {
  'speed': 100,
  'pulse': 0,
  'taskSheet': {
    'tasks': {},
    'add': function (task, interval) {
      gameCore.tick.taskSheet.tasks[task] = interval;
    },
    'remove': function (task) {
      delete this.tasks[task];
    },
    '_execute': function () {
      Object.keys(gameCore.tick.taskSheet.tasks).map(function (el) {

        var func = el;
        var value = gameCore.tick.taskSheet.tasks[el];
        console.log("executing...", gameCore.tick.pulse , value, el);
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

var alive = setInterval(gameCore.tick.worker, gameCore.tick.speed);
export { gameCore }