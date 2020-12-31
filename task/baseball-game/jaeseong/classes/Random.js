"use strict";

export default class Random {
  static question() {
    const comRanNum = [];
    const randomUseNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let n = 0; n <= 2; n++) {
      const idx = parseInt(Math.random() * (10 - n));
      comRanNum.push(randomUseNumber[idx]);
      randomUseNumber.splice(idx, 1);
    }
    return comRanNum.join("");
  }
}
