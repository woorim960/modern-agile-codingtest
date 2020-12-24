`use strict`;

const inputTxt = document.querySelector('#user-input');
const inputBtn = document.querySelector('#submit');
const result = document.querySelector('#result');
const comPick = [];

function init() {
  inputBtn.addEventListener('click', ()=> {
    let inputvalue = inputTxt.value;
    errorSituation(inputvalue);
    baseballClass.calcurator(inputvalue);
  });
}

function errorSituation(inputvalue) {
  let delOverlap = new Set(inputvalue);

  if (isNaN(parseInt(inputvalue))) {
    error();
  }
  if (inputvalue.length !== 3) {
      error();
  }
  if (inputvalue.split('').length !== delOverlap.size) {
      error();
  }
}

//잘못 입력했을 때 나오는 창
function error() {
  alert('다시 입력해주세요!');
  inputTxt.value = '';
}


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

//스트라이크 계산
function strike(first, second, userNumArr, computerInputNumbers) {
  if (first === second && parseInt(userNumArr[first]) === computerInputNumbers[second]) {
    baseballClass.strikeCount++;
  }
  return baseballClass.strikeCount;
}
//볼 계산
function ball(first, second, userNumArr, computerInputNumbers) {
  if (first != second && parseInt(userNumArr[first]) === computerInputNumbers[second]) {
    baseballClass.ballCount++;
  }
  return baseballClass.ballCount;
}
//하나도 안맞을때
function fail() {
  result.innerHTML = '미싱'
}
//성공! 글씨들과 버튼 생성
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
    this.computerInputNumbers = random.comSet(comPick);
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  //전체적인 계산 알고리즘
  calcurator(inputvalue){
    this.strikeCount = 0;
    this.ballCount = 0;
    //초기화
    let userNumArr = inputvalue.split('');
    for (let first = 0; first < 3; first++) {
      for (let second = 0; second < 3; second++) {
        strike(first, second, userNumArr, this.computerInputNumbers);
        ball(first, second, userNumArr, this.computerInputNumbers);
      }
    }

    if (this.strikeCount === 3) {
      return success();
    }else if (!this.strikeCount && !this.ballCount) {
      return fail();
    }else {
      result.innerHTML = `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
    }
    return result;
  }
}

let baseballClass = new BaseballGame();
init();