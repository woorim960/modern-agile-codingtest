`use strict`;

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    const { strike, ball } = this.getStrikeAndBallCount(
      computerInputNumbers,
      userInputNumbers
    );

    return this.getResultMessage(strike, ball);
  }

  getStrikeAndBallCount(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (this.isStrike(computerInputNumbers[i], userInputNumbers[i])) {
        strike++;
      } else if (this.isBall(computerInputNumbers, userInputNumbers[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }

  isStrike(computerInputNumber, userInputNumber) {
    if (computerInputNumber === userInputNumber) {
      return true;
    }
    return false;
  }

  isBall(computerInputNumbers, userInputNumber) {
    if (computerInputNumbers.includes(userInputNumber)) {
      return true;
    }
    return false;
  }

  getResultMessage(strike, ball) {
    if (strike === 0 && ball === 0) {
      return "낫싱";
    }

    if (strike > 0) {
      if (ball > 0) {
        return `볼 : ${ball} , 스트라이크 : ${strike}`;
      }
      if (strike === 3) {
        return "홈런";
      }
      return `스트라이크 : ${strike}`;
    }
    return `볼 : ${ball}`;
  }
}
