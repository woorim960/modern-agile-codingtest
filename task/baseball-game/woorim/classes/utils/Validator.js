"use strict";

export default class Validator {
  static isNumber(value) {
    return !isNaN(value);
  }

  static isThreeLength(value) {
    return value.length === 3;
  }
}
