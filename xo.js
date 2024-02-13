// xo.js

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function handleClick(index) {
  if (gameBoard[index] === "") {
    gameBoard[index] = currentPlayer;
    document.getElementById(`text${index + 1}`).innerText = currentPlayer;

    if (checkWinner()) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else if (gameBoard.every((cell) => cell !== "")) {
      alert("It's a tie!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameBoard[a] !== "" &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`text${i}`).innerText = "";
  }
}
