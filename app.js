// BOARD INTERACTIVITY.
// selector for all game 'cells'.
let cells = document.querySelectorAll('.top, .middle, .bottom');
// listener for cells being clicked.
cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});
// move count.
let count = 0;
// main function that drives the game:
// every click runs the logic.
function cellClicked(e) {
    playerCheck();
    if (gameOver === true) {
        boardReset();
    } else if (checkCell(e) === false) {
        e.target.textContent = currentPlayer;
        count++;
    }
    boardRead();
    winCheck();
    statusUpdate();
}
// determine current player.
let currentPlayer = "F";
function playerCheck() {
    if (count % 2 === 0) {
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }
}
// check if cell has been clicked.
function checkCell(e) {
    let clicked = false;
    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        clicked = true;
    }
    return clicked;
}

// GAME LOGIC.
let gameWon = false, gameDraw = false, gameOver = false, winner = "F";
// 1d array to hold game cells.
let board = [];
// populate board array based on cell contents.
function boardRead() {
    for (i = 0; i < cells.length; i++) {
        board[i] = cells[i].textContent;
    }
}
let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function winCheck() {
    for (let i = 0; i < combos.length; i++) {
        let combo = combos[i];
        let sum = 0;
        for (let j = 0; j < combo.length; j++) {
            let wc = [];
            if (cells[combo[j]].textContent === currentPlayer) {
                sum++;
                wc = combos[i];
            }
            if (sum === 3) {
                gameWon = true;
                winner = currentPlayer;
                // highlight winning combo.
                for (let r in wc) {
                    cells[wc[r]].className += " highlight";
                }
            }
        }
    }
}

// NICETIES.
// errata (updating status, resetting board).
// selector for the status div.
let status = document.querySelector('#status');
// update status div.
function statusUpdate() {
    if (gameWon === true && gameOver === false) {
        status.textContent = "Game over! " + winner + " wins! Click to play again.";
        gameOver = true;
    }
    else if (count > 0 && count < 9) {
        status.textContent = "Game started! Turn number: " + count;
    }
    else if (gameWon === false && count === 9) {
        status.textContent = "Draw! Game over. Click to play again.";
        gameDraw = true;
        gameOver = true;
    }
}
function boardReset() {
    status.textContent = "Game reset. Click the board to begin!";
    cells.forEach(function (cell) {
        cell.textContent = "";
        cell.classList.remove("highlight");
    });
    gameWon = false;
    gameDraw = false;
    gameOver = false;
    count = 0;
}