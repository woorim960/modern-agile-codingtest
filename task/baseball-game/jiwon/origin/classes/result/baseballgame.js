import { result, inputTxt } from "../DOM.js";
import Computer from "../random/computer.js";
import Output from "./output.js";

let computerInputNumbers = Computer.getRandomNumbers();

export default class BaseballGame {
  play() {
    this.countStrikeAndBall();
    return result;
  }

  countStrikeAndBall() {
    let ballCount = 0;
    let strikeCount = 0;
    let userNumbers = inputTxt.value;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userNumbers[i]) {
        strikeCount++;
      } else if (computerInputNumbers.includes(userNumbers[i])) {
        ballCount++;
      }
    }

    this.inspect(strikeCount, ballCount);
  }

  inspect(strikeCount, ballCount) {
    if (strikeCount === 3) {
      return Output.success();
    }
    if (!strikeCount && !ballCount) {
      return Output.fail();
    }
    Output.strikeAndball(strikeCount, ballCount);
  }
}
