"use strict";

import BaseballGame from "./classes/BaseballGame.js"; // export defult
import User from "./classes/User.js"; // export defult
import Random from "./classes/utils/Random.js"; // export defult
import { userInput, submitBtn, result } from "./classes/utils/DOM.js"; // export

const SHAKE_COUNT_NUMBER = 3;
const computerInputNumbers = Random.shakeNumber(SHAKE_COUNT_NUMBER);

submitBtn.addEventListener("click", run);

function run() {
  const baseballGame = new BaseballGame();
  const user = new User();

  const userInputNumbers = user.getInputNumber();
  const endingMessage = baseballGame.play(
    computerInputNumbers,
    userInputNumbers
  );

  printEnding(endingMessage);
}

function printEnding(endingMessage) {
  userInput.value = "";
  result.innerHTML = endingMessage;
}
