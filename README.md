# tic tac toe
## interactive web-based game
### lab for Innovate Birmingham Software Development course

#### version 2

Streamlining previous project.

#### objectives:
* players click on a cell to make a move.
* X is always first player.
* after each move, board is checked for winner or a draw.
    * if won/draw, show message announcing winner/draw (status).
* when game is over, click board to reset/restart.

#### approach:
* querySelectorAll - all board cells.
* addEventListener - listen on each cell for clicks (for each).
* count - move counter: increment every time a (blank) cell is clicked.
    * logic: there will never be more than nine moves; this dictates draw condition (all cells filled, no winner = draw).
* cellClicked() - clicking on a blank cell is the main driver behind the game function/logic. click listener calling cellClicked() is the main method.
* checkCell() - when cell clicked, need to check to make sure it is blank.
    * return a boolean function, true if X or O, false otherwise.
* setXO() - if cell is blank, assign it based on turn number.
    * even = X
    * odd = O
* populate an array with values for every cell.
* check if the game has been won:
    * check rows to see if three cells are identical.
    * check columns.
    * check diagonal.
* check for draw:
    * all cells clicked, game not won.
* add a status div to display the game's current status (ready, turn number, winner/draw).
    * selector for 'status' div.
    * updateStatus function to update, called on every click.
