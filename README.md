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

### approach:
* add a status div to display the game's current status (ready, turn number, winner/draw).
    * selector for 'status' div.
    * updateStatus function to update, called on every click.
* check if the game has been won:
    * check rows to see if three cells are identical.
    * check columns.
    * check diagonal.
    * switch block?
* check for draw:
    * all cells clicked, game not won.