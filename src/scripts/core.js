/**
 * Created by christianmadlener on 15.11.16.
 *
 * TODO:  - timeout functionality
 *        - check for already existing tasks on creation
 *
 */

var gameCore = {};
gameCore.tick = {
  'speed': 1000,
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
      Object.keys(this.tasks).map(function (el) {
        var func = el;
        var value = gameCore.tick.taskSheet.tasks[el];
        if (gameCore.tick.pulse % value === 0) window[func]();
      });
    }
  },
  'worker': function () {
    gameCore.tick.pulse++;
    gameCore.tick.taskSheet._execute();
  }
};

var alive = setInterval(gameCore.tick.worker, gameCore.tick.speed);
export { gameCore }