//dummy game objects
game = {
    level: 1,
    credits: 10,
    score: 0,
    sound: 0,
    music: 0
};

//dummy invader array
invaders = Array();
invaders[0] = {
    name: "Gonzales",
    hp: 1,
    speed: 4,
    image: [0, 1, 0]
};
invaders[1] = {
    name: "Smith",
    hp: 2,
    speed: 2,
    image: [1, 0, 1]
};
invaders[2] = {
    name: "Bunker",
    hp: 4,
    speed: 1,
    image: [1, 1, 1]
};

//creates the Command view in which the player setups his invasion force
function Command() {
    
    //default functionality
    this.init = function() {
        this.createGrids();
        this.createInvaderSelection();
        this.addListeningPost();
    };

    //builds up the grid
    this.createGrid = function() {

    };

    //so that people see what they got
    this.createInvaderSelection = function() {

    };

    //get the list of current invaders
    this.fetchInvaders = function() {

    };

    //adds event listeners
    this.addListeningPost = function() {

    }
}