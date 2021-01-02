`use strict`;

import ErrorMessage from "./classes/error/ErrorMessage.js";
import { inputBtn, inputTxt } from "./classes/DOM.js";
import BaseballGame from "./classes/result/Baseballgame.js";
import ErrorValidator from "./classes/error/ErrorValidator.js";
import Computer from "./classes/random/computer.js"

const baseballGame = new BaseballGame();

let computerInputNumbers = Computer.getRandomNumbers();

function init() {
  inputBtn.addEventListener("click", run);
}

function run() {
  let inputValue = inputTxt.value;

  if (ErrorValidator.isNotNumber(inputValue)) {
    return ErrorMessage.notNumber();
  }
  if (!ErrorValidator.isThreeNumber(inputValue)) {
    return ErrorMessage.overThreeNumber();
  }
  if (ErrorValidator.isoverlapNumber(inputValue)) {
    return ErrorMessage.overlapNumber();
  }
  baseballGame.play(inputValue, computerInputNumbers);
}

init();
