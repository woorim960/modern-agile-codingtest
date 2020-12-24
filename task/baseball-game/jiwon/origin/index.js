`use strict`;

const inputTxt = document.querySelector('#user-input');
const inputBtn = document.querySelector('#submit');
const result = document.querySelector('#result');
const comPick = [];

//컴퓨터에서 랜덤함수 만듦
class Random {
  comSet(comPick) {
    comPick[0] = Math.floor(Math.random() * 9 + 1);
    do {
      comPick[1] = Math.floor(Math.random() * 9 + 1);
    } while (comPick[0] === comPick[1]);
  
    do {
      comPick[2] = Math.floor(Math.random() * 9 + 1);
    } while (comPick[2] === comPick[0] || comPick[1] === comPick[2]);
  
    return comPick;
  }
}

let random = new Random();

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = random.comSet(comPick);
    this.strikeCount = 0;
    this.ballCount = 0;
  }
}

let baseballClass = new BaseballGame();

