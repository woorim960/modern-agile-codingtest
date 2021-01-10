"use strict";

import { resultSpace } from "../classes/DOM.js";
import Output from "./Output.js";

export default class BaseballGame {
  play(computerNumber, userNumbers) {
    this.countStrikeBall(computerNumber, userNumbers);
  }

  countStrikeBall(computerNumber, userNumbers) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === computerNumber[i]) {
        strikeCount++;
      } else if (computerNumber.includes(userNumbers[i])) {
        ballCount++;
      }
    }
    Output.readout(strikeCount, ballCount);
  }
}
