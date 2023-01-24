import view from "./view.js";
import * as model from "./model.js";

//reseting the game
const controlReset = function () {
  model.reset();
  view.resetCross();
};

//starting function
const start = function () {
  view.hideWelcomePage();
  model.state.gameRunning = true;
};

const controlGame = function (cell) {
  if (cell.innerText == "" && model.state.gameRunning) {
    view.updateCell(cell, model.state.turn);
    const res = model.updateGame(cell);
    console.log(model.state.options);
    //check results
    if (res == 1) {
      //its win
      view.showWinner(model.state.turn, ...model.state.result);
      return;
    }
    if (res == 2) {
      //its draw
      console.log("draw");
      view.showDraw();
      return;
    }
    view.changeTurnDisplay(model.state.turn);
  }
};
//Initilizing the game
function inint() {
  //handler on reset button
  view.addHandlerReset(controlReset);
  view.addHandlerStart(start);
  view.addHandlerGameBox(controlGame);
}

inint();

///////////////////////////////////////////
