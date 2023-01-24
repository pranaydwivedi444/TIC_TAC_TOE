export const state = {
  winningSet: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ],
  options: new Array(9).fill(""),
  gameRunning: false,
  turn: "x",
  res: 0,
  result: [],
};
//checking the results
function checkResults() {
  for (set of state.winningSet) {
    const cell1 = state.options[set[0] - 1];
    const cell2 = state.options[set[1] - 1];
    const cell3 = state.options[set[2] - 1];
    if (cell1 == "" || cell2 == "" || cell3 == "") {
      continue;
    }
    if (cell1 == cell2 && cell2 == cell3) {
      state.result = [set[0] - 1, set[1] - 1, set[2] - 1];
      return 1;
    }
  }
  if (!state.options.includes("")) {
    //draw the game
    console.log("draw");
    return 2;
  }
  //   return 0;
}

const updateCell = function (cell) {
  const index = cell.getAttribute("data-num");

  state.options[index - 1] = state.turn;
};

export const updateGame = function (cell) {
  updateCell(cell);
  //check results
  const res = checkResults();
  if (res) {
    state.gameRunning = false;
    return res;
  }

  //   turn change
  state.turn = state.turn == "x" ? "o" : "x";
};

export const reset = function () {
  state.gameRunning = true;
  state.turn = "x";
  state.options = new Array(9).fill("");
};
