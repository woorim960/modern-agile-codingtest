"use strict";

export default class Random {
  static number() {
    let numbers = "";
    let count = 3;
    while (count > 0) {
      const number = Math.floor(Math.random() * (9 - 1) + 1);
      if (!numbers.includes(number)) {
        numbers += number;
        count--;
      }
    }
    return numbers;
  }
}
