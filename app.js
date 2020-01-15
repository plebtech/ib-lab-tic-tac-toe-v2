// selector for the status div.
let status = document.querySelector('#status');
// selector for all game 'cells'.
let cells = document.querySelectorAll('.top, .middle, .bottom');


// variable for whether game has been won.
let gameWon = false;
// variable for game winner (used in displaying game status).
winner = undefined;
// move count.
let count = 0;

// listener for cells being clicked.
cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

// handles cell being clicked.
function cellClicked(e) {
    if (checkCell(e) === false) {
        setXO(e);
        count++;
    }
    updateStatus();
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
        status.textContent = "Game over!" + winner + " wins!";
    } else if (count > 0) {
        status.textContent = "Game started! Turn number: " + count;
    }
}