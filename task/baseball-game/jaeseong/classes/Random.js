"use strict";

let comRanNum = [];
export default class Random {
    
  randomQuestion(comRanNum) {
    comRanNum = this.comRanNum;
    
    const randomUseNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for(let n = 0; n <= 2; n++) {
        const randomNumberIndex = parseInt(Math.random() * (10 - n));
        this.comRanNum.push(randomUseNumber[randomNumberIndex]);
        randomUseNumber.splice(randomNumberIndex, 1);
    }
    this.comRanNum = this.comRanNum.join('');
    return this.comRanNum;
  }
}