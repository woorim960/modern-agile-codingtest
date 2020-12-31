`use strict`;

import Error from "./classes/error/error.js";
import { inputBtn, inputTxt } from "./classes/DOM.js";
import BaseballGame from "./classes/result/baseballgame.js";
import Validator from "./classes/Validator.js";

const baseballGame = new BaseballGame();

function init() {
  inputBtn.addEventListener("click", run);
}

function run() {
  let inputValue = inputTxt.value;
  if (!Validator.isThreeNumber(inputValue)) {
    Error.overThreeNumber();
  }
  Error.throw(inputValue);
  baseballGame.play();
}

init();
