"use strict";
let count = 3;
const MIN = 1;
const MAX = 9;
export default class Random {
  static question() {
    let numbers = "";
    while (count > 0) {
      let number = parseInt(Math.random() * (MAX - MIN) + MIN);

      if (!numbers.includes(number)) {
        numbers += number;
        count--;
      }
    }
    return numbers;
  }
}