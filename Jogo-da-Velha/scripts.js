// Declaração das variaveis
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

// Variavel responsável pelo turno de jogadores
let isCircleTurn;

// combinação das vitórias possíveis
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
// Função responsável por iniciar o jogo
const startGame = () => {
  isCircleTurn = false;
  // Para cada célula na variavel cellElements
  for (const cell of cellElements) {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    // Remove escuta de evento "clique"
    cell.removeEventListener("click", handleClick);
    // Adiciona uma escuta de evento "clique" com execução única
    cell.addEventListener("click", handleClick, { once: true });
  }

  setBoardHoverClass();
  winningMessage.classList.remove("show-winning-message");
};
// Função FimdeJogo, passando um parametro de empate
const endGame = (isDraw) => {
  //Se empate o texto da mensagem de vitória muda,
  // caso contrário o resultado muda de acordo com a variavel isCircleTurn
  if (isDraw) {
    winningMessageTextElement.innerText = "Empate!";
  } else {
    winningMessageTextElement.innerText = isCircleTurn
      ? "O Venceu!"
      : "X Venceu!"
  }
 
  winningMessage.classList.add("show-winning-message");
};
// Função confere se houve vitória, verifica se houve combinação no "winningCombinations"
const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer);
    });
  });
};

const checkForDraw = () => {
  return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
};

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

const swapTurns = () => {
  isCircleTurn = !isCircleTurn;

  setBoardHoverClass();
};

const handleClick = (e) => {
  // Colocar marca (X ou Círculo)
  const cell = e.target;
  const classToAdd = isCircleTurn ? "circle" : "x";

  placeMark(cell, classToAdd);

  // Verificar por vitória
  const isWin = checkForWin(classToAdd);

  // Verificar por empate
  const isDraw = checkForDraw();

  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    endGame(true);
  } else {
    // Mudar símbolo
    swapTurns();
  }
};

startGame();

restartButton.addEventListener("click", startGame);