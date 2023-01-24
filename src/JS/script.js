const gameBox = document.querySelector(".play-container");
const resetBtn = document.querySelector(".btn-reset");
const startBtn = document.querySelector(".btn-start");
const status = document.querySelector(".info");
const boxes = Array.from(document.querySelectorAll(".box"));
const turnEffect = new Audio("src/audio/ting.mp3");
const winEffect = new Audio("src/audio/gameover.mp3");
const winGif = document.querySelector(".wingif");
const tempHeader = document.querySelector(".header-temp");
const gameContainer = document.querySelector(".game-container");
const mainHeader = document.querySelector(".main-header");
// console.log("😀");
let gameRunning = false;
let turn = "x";
const winningSet = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
let options = new Array(9).fill("");

//updating the cell after every click
const updateCell = function (cell) {
  cell.innerText = turn;
  const index = cell.getAttribute("data-num");
  // console.log(index);
  options[index - 1] = turn;
  console.log(options);
};

//changing the turn every time
const changeTurn = function () {
  turn = turn == "x" ? "o" : "x";
  status.textContent = `Turn for ${turn.toUpperCase()} `;
  turnEffect.play();
};
//checking the results
function checkResults() {
  for (set of winningSet) {
    const cell1 = options[set[0] - 1];
    const cell2 = options[set[1] - 1];
    const cell3 = options[set[2] - 1];
    if (cell1 == "" || cell2 == "" || cell3 == "") {
      continue;
    }
    if (cell1 == cell2 && cell2 == cell3) {
      showWinner(cell1, set[0] - 1, set[1] - 1, set[2] - 1);
      return;
    }
  }
  if (!options.includes("")) {
    //draw the game

    showDraw();
  }
}
//Declaring the winner
function showWinner(winner, cell1, cell2, cell3) {
  status.textContent = `${winner.toUpperCase()} has won the game`;
  gameRunning = false;
  //"😀"
  boxes[cell1].textContent = "😀";
  boxes[cell2].textContent = "😀";
  boxes[cell3].textContent = "😀";
  winGif.style.width = "15rem";
  winEffect.play();
}
//function to draw the game
function showDraw() {
  gameRunning = false;
  status.textContent = `GAME DRAW `;
  winEffect.play();
}
//reseting the game
function reset() {
  boxes.forEach((box) => (box.textContent = ""));
  gameRunning = true;
  turn = "x";
  status.textContent = `Turn for ${turn.toUpperCase()} `;
  winGif.style.width = "0";
  options = new Array(9).fill("");
}
//Initilizing the game
function inint() {
  gameRunning = true;
  resetBtn.addEventListener("click", reset);
  startBtn.addEventListener("click", function () {
    tempHeader.classList.toggle("hidden");
    mainHeader.classList.toggle("hidden");
    gameContainer.classList.toggle("hidden");
  });
  gameBox.addEventListener("click", function (e) {
    const mark = e.target.closest(".box");
    // console.log("clicked", mark);
    if (!mark) return;
    if (mark.innerText == "" && gameRunning) {
      updateCell(mark);
      changeTurn();
      checkResults();
    }
  });
}

inint();
