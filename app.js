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
    if (gameOver === true) {
        boardReset();
    } else if (checkCell(e) === false) {
        setXO(e);
        count++;
    }
    boardRead();
    boardCheck();
    statusUpdate();
}
// check if cell has been clicked.
function checkCell(e) {
    let clicked = false;
    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        clicked = true;
    }
    return clicked;
}
// assign game piece to clicked cell based on game turn (evens = X, odds = O).
function setXO(e) {
    if (count % 2 === 0) {
        e.target.textContent = 'X';
    } else {
        e.target.textContent = 'O';
    }
}

// GAME LOGIC.
let gameWon = false, gameDraw = false, gameOver = false, winner = "F";
// 1d array to hold game cells.
let board = ["F", "F", "F", "F", "F", "F", "F", "F", "F"];
// populate board array based on cell contents.
function boardRead() {
    board[0] = document.getElementsByClassName('top left')[0].textContent;
    board[1] = document.getElementsByClassName('top center')[0].textContent;
    board[2] = document.getElementsByClassName('top right')[0].textContent;
    board[3] = document.getElementsByClassName('middle left')[0].textContent;
    board[4] = document.getElementsByClassName('middle center')[0].textContent;
    board[5] = document.getElementsByClassName('middle right')[0].textContent;
    board[6] = document.getElementsByClassName('bottom left')[0].textContent;
    board[7] = document.getElementsByClassName('bottom center')[0].textContent;
    board[8] = document.getElementsByClassName('bottom right')[0].textContent;
}
// check board for winning combinations.
function boardCheck() {
    if (gameWon === false) {
        topCheck();
        middleCheck();
        bottomCheck();
        diagCheckB();
        diagCheckF();
        leftCheck();
        centerCheck();
        rightCheck();
    }
}
function topCheck() { // 0 1 2.
    if ((board[0] === "X" || board[0] === "O") && (board[0] === board[1] && board[1] === board[2])) {
        gameWon = true;
        winner = board[0];
    }
}
function middleCheck() { // 3 4 5.
    if ((board[3] === "X" || board[3] === "O") && (board[3] === board[4] && board[4] === board[5])) {
        gameWon = true;
        winner = board[3];
    }
}
function bottomCheck() { // 6 7 8.
    if ((board[6] === "X" || board[6] === "O") && (board[6] === board[7] && board[7] === board[8])) {
        gameWon = true;
        winner = board[6];
    }
}
function diagCheckB() { // 0 4 8.
    if ((board[0] === "X" || board[0] === "O") && (board[0] === board[4] && board[4] === board[8])) {
        gameWon = true;
        winner = board[0];
    }
}
function diagCheckF() { // 2 4 6.
    if ((board[2] === "X" || board[2] === "O") && (board[2] === board[4] && board[4] === board[6])) {
        gameWon = true;
        winner = board[2];
    }
}
function leftCheck() { // 0 3 6.
    if ((board[0] === "X" || board[0] === "O") && (board[0] === board[3] && board[3] === board[6])) {
        gameWon = true;
        winner = board[0];
    }
}
function centerCheck() { // 1 4 7.
    if ((board[1] === "X" || board[1] === "O") && (board[1] === board[4] && board[4] === board[7])) {
        gameWon = true;
        winner = board[1];
    }
}
function rightCheck() { // 2 5 8..
    if ((board[2] === "X" || board[2] === "O") && (board[2] === board[5] && board[5] === board[8])) {
        gameWon = true;
        winner = board[2];
    }
}
// check for draw.
function drawCheck() {
    if (gameWon === false && count === 9) {
        gameDraw = true;
        gameOver = true;
        status.textContent = "Draw! Game over. Click to play again.";
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
    });
    gameWon = false;
    gameDraw = false;
    gameOver = false;
    count = 0;
}