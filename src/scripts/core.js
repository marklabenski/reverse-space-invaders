/**
 * Created by christianmadlener on 15.11.16.
 *
 *
 */


var gameCore = {
  'tick': 100,
  'heart': {
    'age': 0,
    'beat': function() {
      this.age += 1;
    }
  },
  'index': 0,
  'tasks': [],
  'events': [],
  'addTask': function(id, interval,task){},
  'removeTask': function(id){},
  'getTasks': function() {},
  '_executeTask': function(){},
  'addEvent': function(){}
  };

var heartBeat = setInterval(gameCore.heart.beat, gameCore.tick);
export { gameCore }