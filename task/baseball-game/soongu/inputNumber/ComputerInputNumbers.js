`use strict`;
import { NUMBER_LENGTH } from "../util/NumberLength.js";

export default class ComputerInputNumbers {
  random() {
    const computerInputNumbers = new Set();

    while (computerInputNumbers.size != NUMBER_LENGTH) {
      computerInputNumbers.add(Math.floor(Math.random() * (10 - 1) + 1) + "");
    }
    return Array.from(computerInputNumbers).join("");
  }
}
