 // export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

import countStrikeBall from "./class/countStrikeBall.js";
import Check from "./class/Check.js";
import Computer from "./class/Computer.js";
import Output from "./class/Output.js";


const inputTxt = document.querySelector("#user-input"),
  btnInput = document.querySelector("#submit"),
  btnReset = document.querySelector("#game-restart-button"),
  result = document.querySelector("#result");

const computerPick = [];
const inputValue = inputTxt.value;

  //초기 실행 함수
function init() {
  btnInput.addEventListener(`click`,() => {
    let inputValue = inputTxt.value;
    Check.error(inputValue);
    BaseballGame.play(inputValue,computerPick);
  })
}

export default class BaseballGame {
  static play(inputValue,computerPick){
    const { strike, ball } = countStrikeBall.num(inputValue,computerPick);
    console.log(countStrikeBall.num(inputValue,computerPick));
    
    if(Output.isStrike()) {
      Output.stikeMessage();
    } else if (Output.isNoting()) {
      Output.notingMessage();
    } else {
        Output.ballAndStrikeMessage();
    }
  }
}

Computer.getRandom(computerPick);
init();
btnReset.addEventListener(`click`, () => {
  window.location.reload(true);
});


