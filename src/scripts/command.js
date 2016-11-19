//dummy game objects
game = {
    level: 1,
    credits: 10,
    score: 0,
    sound: 0,
    music: 0,
    grid: { rows: 3, cols: 4 }
};

//dummy invader array
invaders = Array();
invaders[0] = { name: "Gonzales", health: 1, armed: 0, speed: 4, image: [0, 1, 0]};
invaders[1] = { name: "Pedro", health: 4, armed: 0, speed: 1, image: [0, 1, 0]};
invaders[2] = { name: "Hannes", health: 2, armed: 1, speed: 2, image: [0, 1, 0]};
invaders[3] = { name: "Gonzales", health: 1, armed: 0, speed: 4, image: [0, 1, 0]};
invaders[4] = { name: "Pedro", health: 4, armed: 0, speed: 1, image: [0, 1, 0]};
invaders[5] = { name: "Hannes", health: 2, armed: 1, speed: 2, image: [0, 1, 0]};
invaders[6] = { name: "Gonzales", health: 1, armed: 0, speed: 4, image: [0, 1, 0]};
invaders[7] = { name: "Pedro", health: 4, armed: 0, speed: 1, image: [0, 1, 0]};
invaders[8] = { name: "Hannes", health: 2, armed: 1, speed: 2, image: [0, 1, 0]};
invaders[9] = { name: "Gonzales", health: 1, armed: 0, speed: 4, image: [0, 1, 0]};
invaders[10] = { name: "Pedro", health: 4, armed: 0, speed: 1, image: [0, 1, 0]};
invaders[11] = { name: "Hannes", health: 2, armed: 1, speed: 2, image: [0, 1, 0]};
invaders[12] = { name: "Gonzales", health: 1, armed: 0, speed: 4, image: [0, 1, 0]};
invaders[13] = { name: "Pedro", health: 4, armed: 0, speed: 1, image: [0, 1, 0]};
invaders[14] = { name: "Hannes", health: 2, armed: 1, speed: 2, image: [0, 1, 0]};


//here we go
var cmd = new Command();
cmd.init();

//creates the Command view in which the player setups his invasion force
function Command() {

    //default functionality
    this.init = function() {
        this.createGrid();
        this.createInvaderSelection();
        this.addListeningPost();
    };

    //builds up the grid
    this.createGrid = function() {

        //lets see how large the bugger is
        var gridSize = {};
        gridSize.width = document.getElementsByClassName("grid")[0].offsetWidth;
        gridSize.height = document.getElementsByClassName("grid")[0].offsetHeight;

        //so what is the maximum possible size of a grids element?
        var maxGridElementWidth = Math.floor(gridSize.width / game.grid.cols);
        var maxGridElementHeight = Math.floor(gridSize.height / game.grid.rows);

        //now considering the grids elements are square...
        var gridElementSize;
        if(maxGridElementWidth <= maxGridElementHeight) {
            gridElementSize = maxGridElementWidth;
        }
        else {
            gridElementSize = maxGridElementHeight;
        }

        //lets adjust the elements container a bit
        document.getElementsByClassName("grid_element_container")[0].style.width = (gridElementSize * game.grid.cols) + "px";
        document.getElementsByClassName("grid_element_container")[0].style.height = (gridElementSize * game.grid.rows) + "px";

        //now add the grid elements
        var gridHTML = "";
        var gridElementCount = game.grid.cols * game.grid.rows;
        for(var i = 0; i < gridElementCount; i++) {
            gridHTML += '<div class="grid_element" style="width: ' + gridElementSize + 'px; height: ' + gridElementSize + 'px"></div>';
        }
        document.getElementsByClassName("grid_element_container")[0].innerHTML = gridHTML;

    };

    //so that people see what they got
    this.createInvaderSelection = function() {
        for(var i = 0; i < invaders.length; i++) {
            if(this.isValidInvader(invaders[i])) {
                var invaderFileName = invaders[i].name.toLocaleLowerCase().replace(" ", "_");
                var invader = document.createElement("img");
                invader.src = "assets/images/invaders/" + invaderFileName + ".svg";
                invader.setAttribute("class", "selection_invader");
                invader.setAttribute("draggable", "true");
                document.getElementsByClassName("selection")[0].appendChild(invader);
            }
        }
    };

    //checks if the invader is available in this level
    this.isValidInvader = function(src) {
        return true;
    }

    //get the list of current invaders
    this.fetchInvaders = function() {

    };

    //adds event listeners
    this.addListeningPost = function() {

    }
}