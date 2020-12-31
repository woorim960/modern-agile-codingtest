`use strict`;

import { btnSubmit, result } from "./util/DOM.js";
import BaseballGame from "./app/BaseballGame.js";
import UserInputNumber from "./inputNumber/UserInputNumber.js";
import ComputerInputNumbers from "./inputNumber/ComputerInputNumbers.js";
import Restart from "./util/Restart.js";
import Validator from "./util/Validator.js";

btnSubmit.addEventListener("click", run); // 버튼을 클릭하면 run() 함수가 실행된다.

const restart = new Restart();
const computerInputNumbers = new ComputerInputNumbers();
let computerInputNumber = computerInputNumbers.random();

function run() {
  const baseballGame = new BaseballGame();
  const userInputNumbers = new UserInputNumber();

  let userInputNumber = userInputNumbers.getInputNumber();
  warnErrorMessage(userInputNumber);

  const strikeAndBallCount = baseballGame.play(
    computerInputNumber,
    userInputNumber
  );
  getFinalMessage(strikeAndBallCount);
  addResetButton(strikeAndBallCount);
}

function warnErrorMessage(userInputNumber) {
  if (!Validator.isNumber(userInputNumber)) {
    alert("숫자를 입력해주세요");
  }
  
  if (!Validator.isInputLength(userInputNumber)) {
    alert("길이 제한을 지켜주세요");
  }
}

function addResetButton(strikeAndBallCount) {
  if (strikeAndBallCount === "홈런") {
    restart.reset();
  }
}

function getFinalMessage(strikeAndBallCount) {
  result.innerHTML = strikeAndBallCount;
}