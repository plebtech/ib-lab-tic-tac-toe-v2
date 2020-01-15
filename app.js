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
// track which cell clicked.
let cellID;

let TL = document.getElementById("cZero")

// listener for cells being clicked.
cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

// MAIN METHOD.
// handles cell being clicked.
function cellClicked(e) {
    cellID = e.target;
    if (checkCell(e) === false) {
        setXO(e);
        count++;
    }
    updateStatus();
    checkDraw();
    console.log(TL.innerHTML);
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