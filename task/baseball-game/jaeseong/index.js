"use strict";

import BaseballGame from "./classes/BaseballGame.js";
import Random from "./classes/Random.js";
import { userInputNumbers, btnClick, result } from "./classes/DOM.js";

const baseballGame = new BaseballGame();

function init() {
  const comRanNum = Random.question();
  console.log(comRanNum);
  btnClick.addEventListener("click", validation);
}

function validation(inputValue) {
  let numbers = { com: comRanNum, user: inputValue };

  if (inputValue.length !== 3) {
    error();
  } else if (isDuplicate(inputValue)) {
    error();
  } else if (!Number(inputValue)) {
    error();
  } else {
    baseballGame.play(numbers.com, numbers.user);
  }
}

function isDuplicate() {
  if (inputValue[0] === inputValue[1]) {
    return true;
  }
  if (inputValue[1] === inputValue[2]) {
    return true;
  }
  if (inputValue[0] === inputValue[2]) {
    return true;
  }
  return false;
}

function error() {
  result.innerHTML = "응?";
}

init();
