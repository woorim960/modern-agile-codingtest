"use strict";

import Validator from "./utils/Validator.js";

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    if (this.throwExceptionNumbers(userInputNumbers)) {
      return "게임을 다시 시작해주십시오.";
    }

    const { strike, ball } = this.getStrikeAndBallCount(
      computerInputNumbers,
      userInputNumbers
    );

    return this.getEndingMessage(strike, ball);
  }

  getStrikeAndBallCount(computerInputNumbers, userInputNumbers) {
    let strike, ball;
    strike = ball = 0;

    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (this.isStrike(computerInputNumbers[i], userInputNumbers[i])) {
        strike++;
      } else if (this.isBall(computerInputNumbers, userInputNumbers[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }

  isStrike(comNumber, userNumber) {
    if (comNumber === userNumber) {
      return true;
    }
    return false;
  }

  isBall(computerInputNumbers, userNumber) {
    if (computerInputNumbers.includes(userNumber)) {
      return true;
    }
    return false;
  }

  getEndingMessage(strike, ball) {
    if (strike === 0 && ball === 0) {
      return "낫싱";
    }
    if (strike > 0) {
      if (ball > 0) {
        return `${ball}볼 ${strike}스트라이크`;
      }
      if (strike === 3) {
        return `🌟 정답을 맞추셨습니다!🌟`;
      }
      return `${strike}스트라이크`;
    }
    return `${ball}볼`;
  }

  throwExceptionNumbers(userInputNumbers) {
    if (!Validator.isNumber(userInputNumbers)) {
      exit("숫자가 아닙니다.");
      return true;
    }
    if (!Validator.isThreeLength(userInputNumbers)) {
      exit("세자리 수가 아닙니다.");
      return true;
    }
    return false;
  }

  exit(message) {
    alert(message);
  }
}
