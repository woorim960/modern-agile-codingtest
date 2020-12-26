`use strict`;

import {comSet} from './random.js';
import {errorSituation} from './error.js';
import {strike, ball, fail} from './strikeBall.js';

const inputTxt = document.querySelector('#user-input');
const inputBtn = document.querySelector('#submit');
const result = document.querySelector('#result');
const comPick = [];

let strikeCount, ballCount;
strikeCount = ballCount = 0;

function init() {
  inputBtn.addEventListener('click', ()=> {
    let inputvalue = inputTxt.value;
    errorSituation(inputvalue);
    baseballClass.calcurator(inputvalue, strikeCount, ballCount);
  });
}
//성공했을때
function success() {
  result.innerHTML = '🎉정답을 맞추셨습니다!🎉';
  let newGame = document.createElement('div');
  let newGameContent = document.createTextNode('게임을 새로 시작하시겠습니까?');
  newGame.appendChild(newGameContent);
  document.body.appendChild(newGame);
  let button = document.createElement('button');
  button.innerText = '게임 재시작';
  button.addEventListener('click', restart);
  document.body.appendChild(button)
}
//게임 재시작 버튼 실행 시
function restart() {
  window.location.reload();
}

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = comSet(comPick);
  }
  //전체적인 계산 알고리즘
  calcurator(inputvalue, strikeCount, ballCount){
    console.log(this.computerInputNumbers);
    let userNumArr = inputvalue.split('');
    for (let first = 0; first < 3; first++) {
      for (let second = 0; second < 3; second++) {
        strikeCount = strike(first, second, userNumArr, this.computerInputNumbers, strikeCount);
        ballCount = ball(first, second, userNumArr, this.computerInputNumbers, ballCount);
      }
    }
    if (strikeCount === 3) {
      return success();
    }else if (!strikeCount && !ballCount) {
      return fail();
    }else {
      result.innerHTML = `${ballCount}볼 ${strikeCount}스트라이크`;
    }
    return result;
  }
}
let baseballClass = new BaseballGame();
init();