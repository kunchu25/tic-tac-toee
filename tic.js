let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWin = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  return null;
};

const checkDraw = () => {
  return gameState.every(cell => cell !== '');
};

const handleClick = (index) => {
  if (!gameActive || gameState[index] !== '') return;

  gameState[index] = currentPlayer;
  document.getElementById(index).textContent = currentPlayer;

  const winner = checkWin();
  if (winner) {
    gameActive = false;
    document.getElementById('status').textContent = `Player ${winner} wins!`;
    return;
  }

  if (checkDraw()) {
    gameActive = false;
    document.getElementById('status').textContent = "It's a draw!";
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
};

const restartGame = () => {
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;

  for (let i = 0; i < 9; i++) {
    document.getElementById(i).textContent = '';
  }
};
