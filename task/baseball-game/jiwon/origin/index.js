// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }
const input = document.querySelector('#user-input');
const inputBtn = document.querySelector('#submit');

const comPick = [];


function comSet(comPick) {
  comPick[0] = Math.floor(Math.random() * 9 + 1);
  do {
    comPick[1] = Math.floor(Math.random() * 9 + 1);
  } while (comPick[0] === comPick[1]);

  do {
    comPick[2] = Math.floor(Math.random() * 9 + 1);
  } while (comPick[2] === comPick[0] || comPick[1] === comPick[2]);

  return comPick;
}

function error() {
  alert('다시 입력해주세요!');
  input.value = '';
}

function errorSituation(userInputNumbers, userNumArr) {
  let delOverlap = new Set(userNumArr);
  if (isNaN(userInputNumbers)) {
    error();
  }
  if ((userInputNumbers % 1000) != userInputNumbers) {
      error();
  }
  if (userNumArr !== [...delOverlap]) {
      error();
  }
}





export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    computerInputNumbers = comSet(comPick);
    userInputNumbers = parseInt(input.value);
    return "결과 값 String";
  }
}

new BaseballGame();
