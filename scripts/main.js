/*
Rules for Tic-Tac-Toe:
----------------------
game is player by 2 players
  X and O
on a 3x3 grid
  an array with 9 slots
  a div container wrap 9 boxes
  each box correlates to one of the slots in array
starting with X, each player takes a turn
  begin the game with X mark
marking spaces on the 3x3 grid
  when clicking on empty space, fill with mark
  update array
  check for winner
    3 in a row, declare the winner
  check for draw
    no more space left
  switch player
game ends
restart to clear grid and repeat
*/

const TicTacToe =  (function() {
  let gameBoard = ['x','o','o','x','x','x','o','o','x'];

  // cache DOM
  const squares = document.querySelectorAll('.square')

  function render() {
    for(let i = 0; i < gameBoard.length; i++) {
      squares[i].textContent = gameBoard[i]
    }
  }

  return {
    display
  }
})();

TicTacToe.display();