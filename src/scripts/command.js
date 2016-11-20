//dummy game objects
game = {
    level: 1,
    credits: 10,
    score: 0,
    sound: 0,
    music: 0,
    grid: { rows: 4, cols: 8 }
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
    this.dragInfo = {
        dragId: false,
        dragSource: false,
        dragCurrent: false
    };

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

        //register dropped invaders
        var elementList = document.getElementsByClassName("grid_element");
        for(i = 0; i< elementList.length; i++) {
            //elementList[i].addEventListener('drop', this.onInvaderDrop, false);
            elementList[i].addEventListener('drop', this.onInvaderDrop, false);
            elementList[i].addEventListener('dragenter', this.onInvaderDragEnter, false);
            elementList[i].addEventListener('dragover', this.onInvaderDragOver, false);
        }
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
                invader.setAttribute("data-invader_id", i);
                invader.addEventListener('dragstart', this.onInvaderDragStart, false);
                invader.addEventListener('dragend', this.onInvaderDragEnd, false);
                document.getElementsByClassName("selection")[0].appendChild(invader);
            }
        }
    };

    this.onInvaderDragEnter = function(evt) {
        evt.preventDefault();
    };

    this.onInvaderDragOver = function(evt) {
        evt.preventDefault();
    };

    //checks if the invader is available in this level
    this.isValidInvader = function(src) {
        return true;
    };

    //get the list of current invaders
    this.fetchInvaders = function() {

    };

    //adds event listeners
    this.addListeningPost = function() {

        //we want to know where the currently dragged object is, and where it comes from
        document.getElementsByClassName("selection")[0].addEventListener("dragenter", this.onDragEnter, false);
        document.getElementsByClassName("command_container")[0].addEventListener("dragenter", this.onDragEnter, false);
        document.getElementsByClassName("grid_element_container")[0].addEventListener("dragenter", this.onDragEnter, false);
    };

    this.onDragEnter = function(evt) {
        if(cmd.hasClass(evt.target, "selection") || cmd.hasClass(evt.target, "selection_invader")) {
            cmd.dragInfo.dragCurrent = "selection";
        }
        else if(cmd.hasClass(evt.target, "command_container")) {
            cmd.dragInfo.dragCurrent = "other";
        }
        else if(cmd.hasClass(evt.target, "grid_element_container") || cmd.hasClass(evt.target, "grid_element")) {
            cmd.dragInfo.dragCurrent = "grid";
        }
    };

    //so... this happens if I drag one of those things...
    this.onInvaderDragStart = function(evt) {
        var invaderId = evt.target.dataset.invader_id;
        cmd.dragInfo.dragId = invaderId;
        cmd.dragInfo.dragSource =
        cmd.dragInfo.dragCurrent = "selection";
    };

    //so... this happens if I drag one of those things...
    this.onInvaderDragEnd = function(evt) {
        if(cmd.dragInfo.dragId) {
            cmd.dragInfo.dragId =
            cmd.dragInfo.dragSource = false;
        }
    };

    //so... this happens if I drag one of those things...
    this.onInvaderDrop = function(evt) {
        evt.preventDefault();

        var invaderFileName = invaders[cmd.dragInfo.dragId].name.toLocaleLowerCase().replace(" ", "_");
        var droppedInvader = document.createElement("img");
        droppedInvader.src = "assets/images/invaders/" + invaderFileName + ".svg";
        droppedInvader.setAttribute("class", "dropped_invader");
        droppedInvader.setAttribute("draggable", "true");
        droppedInvader.setAttribute("data-invader_id", cmd.draggedInvader);
        evt.target.appendChild(droppedInvader);

        cmd.dragInfo.dragId =
        cmd.dragInfo.dragSource = false;
    };

    //lets make it simpplier to check whether an object has a class
    this.hasClass = function(haystack, needle) {
        var arClassName = haystack.className.split(" ");
        var gotIt = false;
        for(var i = 0; i < arClassName.length; i++) {
            if(arClassName[i] == needle) {
                gotIt = true;
                break;
            }
        }
        return gotIt;
    };
}

