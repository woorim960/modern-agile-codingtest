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

const computerPick = Computer.random();

//초기 실행 함수
function init() {
  btnInput.addEventListener(`click`, () => {
    const inputValue = inputTxt.value;
    if (Check.error(inputValue)) {
      return Output.warning();
    }
    BaseballGame.play(inputValue, computerPick);
  });
}

export default class BaseballGame {
  static play(inputValue, computerPick) {
    const { strike, ball } = countStrikeBall.num(inputValue, computerPick);

    if (strike === 3) {
      Output.stikeMessage();
    } else if (strike === 0 && ball === 0) {
      Output.nothingMessage();
    } else {
      Output.ballAndStrikeMessage(ball, strike);
    }
  }
}

btnReset.addEventListener(`click`, () => {
  window.location.reload(true);
});

init();
