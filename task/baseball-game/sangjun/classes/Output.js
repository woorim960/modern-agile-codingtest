"use strict";
import { resultSpace } from "../classes/DOM.js";

export default class Output {
  static readout(strikeCount, ballCount) {
    if (strikeCount === 3) {
      return this.success();
    }
    if (!ballCount && !strikeCount) {
      return this.nothing();
    }
    resultSpace.innerHTML = `${ballCount}볼 ${strikeCount}스트라이크`;
  }

  static nothing() {
    resultSpace.innerHTML = "낫싱";
  }

  static success() {
    const answer = document.createElement("div");
    const answerTxt = document.createTextNode(`🎉정답을 맞추셨습니다!🎉`);
    const restartGame = document.createElement("div");
    const askRestartGame = document.createTextNode(
      `게임을 새로 시작하시겠습니까?`
    );

    answer.appendChild(answerTxt);
    document.body.appendChild(answer);
    restartGame.appendChild(askRestartGame);
    document.body.appendChild(restartGame);
    this.restart();
  }

  static restart() {
    const button = document.createElement("button");
    button.innerHTML = `게임 재시작`;
    button.addEventListener("click", this.reset);
    document.body.appendChild(button);
  }

  static reset() {
    window.location.reload();
  }

  static alert() {
    alert("중복없는 3자리 숫자를 입력해주세요");
  }
}
