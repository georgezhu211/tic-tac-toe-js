const TicTacToe = (function () {
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  let currentMark = 'cross';
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // cache DOM
  const redLine = document.querySelector('.red-line');
  const squares = document.querySelectorAll('.square');
  const message = document.querySelector('.message');
  const restartBtn = document.querySelector('.restart-btn');

  // bind events
  squares.forEach((square) => {
    square.addEventListener('click', playGame);
  });

  restartBtn.addEventListener('click', restartGame);

  // functions
  function playGame() {
    const index = +this.dataset.index;
    if (invalidSquare(index)) return;
    addMark(this, currentMark);
    updateBoard(index, currentMark);
    checkWinner();
    boardFull();
    switchMark();
    console.log(gameBoard);
  }

  function invalidSquare(index) {
    if (gameBoard[index] === '') {
      return false;
    }
    return true;
  }
  function addMark(square, mark) {
    square.classList.add(mark);
  }

  function updateBoard(index, mark) {
    gameBoard[index] = mark;
  }

  function switchMark() {
    if (currentMark == 'cross') {
      currentMark = 'circle';
    } else {
      currentMark = 'cross';
    }
  }

  function checkWinner() {
    winCombinations.forEach((combination) => {
      console.log(combination);
      const result = combination.map((x) => gameBoard[x]);

      if (result.every((x) => x === currentMark)) {
        addRedLine(winCombinations.indexOf(combination));
        message.textContent = `Congrats, ${currentMark} is the winner!`;
        gameOver();
      }
    });
  }

  function boardFull() {
    if (gameBoard.some((square) => square === '')) {
      return;
    }
    message.textContent = `Game is a draw!`;

    gameOver();
  }

  function gameOver() {
    squares.forEach((square) => {
      square.removeEventListener('click', playGame);
    });
  }

  function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    message.textContent = 'Good Luck!';
    squares.forEach((square) => {
      square.addEventListener('click', playGame);
      square.className = 'square';
      redLine.style.display = 'none';
      currentMark = 'cross';
    });
  }

  function addRedLine(index) {
    switch (index) {
      case 0:
        redLine.setAttribute('style', 'top: 80px; left: 0;');
        break;
      case 1:
        redLine.setAttribute('style', 'top: 250px; left: 0;');
        break;
      case 2:
        redLine.setAttribute('style', 'bottom: 75px; left: 0;');
        break;
      case 3:
        redLine.setAttribute(
          'style',
          'top: 250px; left: -170px; transform: rotate(90deg);'
        );
        break;
      case 4:
        redLine.setAttribute(
          'style',
          'top: 250px; left: 0; transform: rotate(90deg);'
        );
        break;
      case 5:
        redLine.setAttribute(
          'style',
          'top: 250px; left: 170px; transform: rotate(90deg);'
        );
        break;
      case 6:
        redLine.setAttribute(
          'style',
          'top: 250px; right: -45px; transform: rotate(45deg); width: 600px;'
        );
        break;
      case 7:
        redLine.setAttribute(
          'style',
          'top: 250px; right: -50px; transform: rotate(-45deg); width: 600px;'
        );
        break;
    }
    redLine.style.display = 'block';
  }
})();
