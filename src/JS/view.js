class View {
  turnEffect = new Audio("src/audio/ting.mp3");
  winEffect = new Audio("src/audio/gameover.mp3");
  winGif = document.querySelector(".wingif");
  status = document.querySelector(".info");
  tempHeader = document.querySelector(".header-temp");
  gameContainer = document.querySelector(".game-container");
  mainHeader = document.querySelector(".main-header");
  gameBox = document.querySelector(".play-container");
  resetBtn = document.querySelector(".btn-reset");
  startBtn = document.querySelector(".btn-start");
  boxes = Array.from(document.querySelectorAll(".box"));

  updateCell(cell, turn) {
    cell.innerText = turn;
  }
  changeTurnDisplay(turn) {
    this.status.textContent = `Turn for ${turn.toUpperCase()} `;
    // this.turnEffect.play();
  }
  addHandlerReset(handler) {
    this.resetBtn.addEventListener("click", handler);
  }

  addHandlerStart(handler) {
    this.startBtn.addEventListener("click", handler);
  }
  hideWelcomePage() {
    this.tempHeader.classList.toggle("hidden");
    this.mainHeader.classList.toggle("hidden");
    this.gameContainer.classList.toggle("hidden");
  }
  resetCross() {
    this.boxes.forEach((box) => (box.textContent = ""));
    this.status.textContent = `Turn for X `;
    this.winGif.style.width = "0";
  }

  addHandlerGameBox(handler) {
    this.gameBox.addEventListener("click", function (e) {
      const cell = e.target.closest(".box");
      // console.log("clicked", mark);
      if (!cell) return;
      handler(cell);
    });
  }

  showWinner(winner, cell1, cell2, cell3) {
    console.log(cell1, cell2, cell3);
    this.status.textContent = `${winner.toUpperCase()} has won the game`;

    //"😀"
    this.boxes[cell1].textContent = "😀";
    this.boxes[cell2].textContent = "😀";
    this.boxes[cell3].textContent = "😀";
    this.winGif.style.width = "15rem";
    // this.winEffect.play();
  }
  //function to draw the game
  showDraw() {
    this.status.textContent = `GAME DRAW `;
    // this.winEffect.play();
  }
}

export default new View();
