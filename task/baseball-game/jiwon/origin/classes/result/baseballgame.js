import { result } from "../DOM.js";
import Output from "./output.js";

export default class BaseballGame {
  play(userNumbers, computerInputNumbers) {
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      if (this.isStrike(userNumbers, computerInputNumbers, i)) {
        strikeCount++;
      } else if (this.isBall(userNumbers, computerInputNumbers, i)) {
        ballCount++;
      }
    }
    this.inspectStirkeBall(strikeCount, ballCount);
  }

  isStrike(userNumbers, computerInputNumbers, i) {
    if (computerInputNumbers[i] === userNumbers[i]) {
      return true;
    }
    return false;
  }

  isBall(userNumbers, computerInputNumbers, i) {
    if (computerInputNumbers.includes(userNumbers[i])) {
      return true;
    }
    return false;
  }

  inspectStirkeBall(strikeCount, ballCount) {
    if (strikeCount === 3) {
      return Output.success();
    }
    if (!strikeCount && !ballCount) {
      return Output.fail();
    }
    Output.strikeAndball(strikeCount, ballCount);
  }
}
