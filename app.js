/* TO DO:
- populate an array to represent the game board, iterating through with every click to populate/update it.
- restart gameboard when game is over.
*/

// winning combinations to test against.
const WINNING_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];



// selector for the status div.
let status = document.querySelector('#status');
// selector for all game 'cells'.
let cells = document.querySelectorAll('.top, .middle, .bottom');

// variables for whether game has been won/drawn.
let gameWon = false;
let gameDraw = false;
// variable for game winner (used in displaying game status).
winner = undefined;
// move count.
let count = 0;

// top row.
let TL = document.getElementById("cZero");
let TM = document.getElementById("cOne");
let TR = document.getElementById("cTwo");
//center row.
let CL = document.getElementById("cThree");
let CM = document.getElementById("cFour");
let CR = document.getElementById("cFive");
//bottom row.
let BL = document.getElementById("cSix");
let BM = document.getElementById("cSeven");
let BR = document.getElementById("cEight");

let grid = [ "F", "F", "F", "F", "F", "F", "F", "F", "F"];

// listener for cells being clicked.
cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

// MAIN METHOD.
// handles cell being clicked.
function cellClicked(e) {
    if (checkCell(e) === false) {
        setXO(e);
        count++;
    }
    updateGrid();
    compareGrid();
    updateStatus();
    checkDraw();
}

// checks if a cell has been clicked yet.
function checkCell(e) {
    let clicked = false;
    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        clicked = true;
    }
    return clicked;
}

// sets the value of a clicked cell to X or O based on the turn number.
function setXO(e) {
    if (count % 2 === 0) {
        e.target.textContent = 'X';
    } else {
        e.target.textContent = 'O';
    }
}

//populates array based on game board (X and O).
function updateGrid() {
    // top row.
    grid[0] = TL.innerHTML;
    grid[1] = TM.innerHTML;
    grid[2] = TR.innerHTML;
    // console.log(grid[0] + " " + grid[1] + " " + grid[2]);
    // middle row.
    grid[3] = CL.innerHTML;
    grid[4] = CM.innerHTML;
    grid[5] = CR.innerHTML;
    // console.log(grid[3] + " " + grid[4] + " " + grid[5]);
    // middle row.
    grid[6] = BL.innerHTML;
    grid[7] = BM.innerHTML;
    grid[8] = BR.innerHTML;
    // console.log(grid[6] + " " + grid[7] + " " + grid[8]);
    // console.log("");
}

// update the status div.
function updateStatus() {
    if (gameWon === true) {
        status.textContent = "Game over!" + winner + " wins! Click to play again.";
    } else if (gameDraw === true) {
        status.textContent = "Game is a draw! Click to play again.";
    } else if (count > 0) {
        status.textContent = "Game started! Turn number: " + count;
    }
}

// checks to see if the game has ended in a draw.
function checkDraw() {
    if (gameWon === false && count === 9) {
        status.textContent = "Draw! Game over. Click to play again.";
    }
}