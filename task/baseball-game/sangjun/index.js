"use strict";

import Random from "./classes/Random.js";
import BaseballGame from "./classes/BaseballGame.js";
import { inputTxt, inputBtn } from "./classes/DOM.js";
import Validator from "./classes/Validator.js";
import Output from "./classes/Output.js";

const computerNumber = Random.number();

function init() {
  inputBtn.addEventListener("click", () => {
    const baseballGame = new BaseballGame();
    const userNumbers = inputTxt.value;
    
    if (isUseable(userNumbers)) {
      baseballGame.play(computerNumber, userNumbers);
    } else {
      Output.alert();
      inputTxt.value = "";
    }
  });
}

function isUseable(userNumbers) {
  if (isNaN(userNumbers)) {
    return false;
  }
  if (!Validator.isThreeNumber(userNumbers)) {
    return false;
  }
  if (Validator.isDuplicate(userNumbers)) {
    return false;
  }
  return true;
}

init();
