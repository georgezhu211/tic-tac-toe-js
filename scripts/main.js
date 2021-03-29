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
  let gameBoard = ['','','','','','','','',''];
  let currentMark = 'x';

  // cache DOM
  const squares = document.querySelectorAll('.square');
  const restartBtn = document.getElementById('restart-button');
  const message = document.querySelector('#message');
  
  // bind events
  squares.forEach((square) => {
    square.addEventListener('click', addMark);
  });

  restartBtn.addEventListener('click', restart);

  function render() {
    for(let i = 0; i < gameBoard.length; i++) {
      squares[i].textContent = gameBoard[i];
    }
    console.log(gameBoard);
  }

  function addMark() {
    const index = +(this.dataset.index);
    if(gameBoard[index] !== '') return
    gameBoard[index] = currentMark;
    render();
    checkWinner();
    switchMark();
  }

  function checkWinner() {
    const winCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    winCombinations.forEach((combination) => {
      const result = combination.map( x => gameBoard[x] )
      if(result.every(x => x === currentMark)) {
        gameOver();
      }
    })
  }

  function switchMark() {
    if(currentMark == 'x') {
      currentMark = 'o';
    } else {
      currentMark = 'x';
    }
  }

  function gameOver() {
    squares.forEach((square) => {
      square.removeEventListener('click', addMark);
    })
    message.textContent = `Congrats, ${currentMark} is the winner!`
  }

  function restart() {
    gameBoard = ['','','','','','','','',''];
    message.textContent = 'Good Luck!';
    playGame();
  }

})();