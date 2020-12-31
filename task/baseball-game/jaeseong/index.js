// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }
"use strict";
import BaseballGame from "./classes/BaseballGame.js";
import { userInputNumbers, btnClick, result } from "./classes/DOM.js";

function init() {
  randomQuestion();
  console.log(comRanNum);
  btnClick.addEventListener("click", ()=> {
    let inputValue = userInputNumbers.value;
    run(inputValue);
  });
}

function run(inputValue) {
  validation(inputValue);
  
}

let comRanNum = [];
function randomQuestion() {
  let randomUseNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for(let n = 0; n <= 2; n++) {
    const randomNumberIndex = parseInt(Math.random() * (10 - n));
    comRanNum.push(randomUseNumber[randomNumberIndex]);
    randomUseNumber.splice(randomNumberIndex, 1);
  }

  comRanNum = comRanNum.join('');
  return comRanNum;
}

function validation(inputValue) {
  let comNumUserNum = { 'comNum' : comRanNum, 'userNum' : inputValue};

  if (inputValue.length !== 3) {
    error(); 
  } else if ((inputValue[0] === inputValue[1])) {
    error();
  } else if ((inputValue[1] === inputValue[2])) {
    error();
  } else if ((inputValue[0] === inputValue[2])) {
    error();
  } else if (!Number(inputValue)) {
    error();
  } else {
    baseballClass.play(comNumUserNum['comNum'], comNumUserNum['userNum']);
  }
}

function error() {
  result.innerHTML = '응?';
}

let baseballClass = new BaseballGame();
init();