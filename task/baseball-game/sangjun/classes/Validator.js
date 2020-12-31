import { resultSpace, inputTxt } from "../classes/DOM.js";
import Output from "./Output.js";

export default class Validator {

  static isThreeNumber(userNumbers) {
    if (userNumbers.length === 3) {
      return true;
    }
    return false;
  }

  static isDuplicate(userNumbers) {
    const deletedDuplicate = new Set(userNumbers);
    if (userNumbers.length !== deletedDuplicate.size) {
      return true;
    }
    return false;
  }
}
