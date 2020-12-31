`use strict`;
import { NUMBER_LENGTH } from "../util/NumberLength.js";

export default class ComputerInputNumbers {
  random() {
    let computerInputNumber = "";
    let computerInputNumbers = "";
    let count = NUMBER_LENGTH;

    while (count > 0) {
      computerInputNumber = Math.floor(Math.random() * (10 - 1)) + 1;
      if (!computerInputNumbers.includes(computerInputNumber)) {
        computerInputNumbers += computerInputNumber;
        count--;
      }
    }
    return computerInputNumbers;
  }
}
