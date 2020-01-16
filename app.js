// selector for the status div.
let status = document.querySelector('#status');
// selector for all game 'cells'.
let cells = document.querySelectorAll('.top, .middle, .bottom');

// variables for whether game has been won/drawn.
let gameWon = false;
let gameDraw = false;
let gameOver = false;
// variable for game winner (used in displaying game status).
let winner = "F";
// move count.
let count = 0;

// creating variables for every game div:
// top row.
let TL = document.getElementById("cZero");
let TM = document.getElementById("cOne");
let TR = document.getElementById("cTwo");
// center row.
let CL = document.getElementById("cThree");
let CM = document.getElementById("cFour");
let CR = document.getElementById("cFive");
// bottom row.
let BL = document.getElementById("cSix");
let BM = document.getElementById("cSeven");
let BR = document.getElementById("cEight");

// vector array to represent game board.
let grid = ["F", "F", "F", "F", "F", "F", "F", "F", "F"];

// listener for cells being clicked.
cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});

// MAIN METHOD.
// handles cell being clicked.
function cellClicked(e) {
    if (gameOver === true) {
        resetBoard();
    } else {
        if (checkCell(e) === false) {
            setXO(e);
            count++;
        }
        updateGrid();
        checkCombos();
        updateStatus();
        checkDraw();
    }
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

// populates array based on game board (X and O).
function updateGrid() {
    // top row.
    grid[0] = TL.innerHTML;
    grid[1] = TM.innerHTML;
    grid[2] = TR.innerHTML;
    // middle row.
    grid[3] = CL.innerHTML;
    grid[4] = CM.innerHTML;
    grid[5] = CR.innerHTML;
    // middle row.
    grid[6] = BL.innerHTML;
    grid[7] = BM.innerHTML;
    grid[8] = BR.innerHTML;
}

function checkCombos() {
    // 0 1 2, top row.
    if ((grid[0] === "X" || grid[0] === "O") && (grid[0] === grid[1] && grid[1] === grid[2])) {
        gameWon = true;
        winner = grid[0];
    }
    // 3 4 5, middle row.
    else if ((grid[3] === "X" || grid[3] === "O") && (grid[3] === grid[4] && grid[4] === grid[5])) {
        gameWon = true;
        winner = grid[3];
    }
    // 6 7 8, bottomw row.
    else if ((grid[6] === "X" || grid[6] === "O") && (grid[6] === grid[7] && grid[7] === grid[8])) {
        gameWon = true;
        winner = grid[6];
    }
    // 0 4 8, diagonal backslant.
    else if ((grid[0] === "X" || grid[0] === "O") && (grid[0] === grid[4] && grid[4] === grid[8])) {
        gameWon = true;
        winner = grid[0];
    }
    // 2 4 6, diagonal forwardslant.
    else if ((grid[2] === "X" || grid[2] === "O") && (grid[2] === grid[4] && grid[4] === grid[6])) {
        gameWon = true;
        winner = grid[2];
    }
    // 0 3 6, left column.
    else if ((grid[0] === "X" || grid[0] === "O") && (grid[0] === grid[3] && grid[3] === grid[6])) {
        gameWon = true;
        winner = grid[0];
    }
    // 1 4 7, middle column.
    else if ((grid[1] === "X" || grid[1] === "O") && (grid[1] === grid[4] && grid[4] === grid[7])) {
        gameWon = true;
        winner = grid[1];
    }
    // 2 5 8, right column.
    else if ((grid[2] === "X" || grid[2] === "O") && (grid[2] === grid[5] && grid[5] === grid[8])) {
        gameWon = true;
        winner = grid[2];
    }
}

// update the status div.
function updateStatus() {
    if (gameWon === true) {
        status.textContent = "Game over! " + winner + " wins! Click to play again.";
        gameOver = true;
    } else if (gameDraw === true) {
        status.textContent = "Game is a draw! Click to play again.";
        gameOver = true;
    } else if (count > 0) {
        status.textContent = "Game started! Turn number: " + count;
    }
}

// checks to see if the game has ended in a draw.
function checkDraw() {
    if (gameWon === false && count === 9) {
        gameDraw = true;
        status.textContent = "Draw! Game over. Click to play again.";
    }
}

// resets board.
function resetBoard() {
    status.textContent = "Game reset. Click the board to begin!";
    cZero.textContent = "";
    cOne.textContent = "";
    cTwo.textContent = "";
    cThree.textContent = "";
    cFour.textContent = "";
    cFive.textContent = "";
    cSix.textContent = "";
    cSeven.textContent = "";
    cEight.textContent = "";
    gameWon = false;
    gameDraw = false;
    gameOver = false;
    count = 0;
}