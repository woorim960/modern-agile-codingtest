"use strict";

export default class BaseballGame {
  play(comNum, userNum) {
    let strike = 0;
    let ball = 0;
    let comNumArray = comNum.split("");
    let userNumArray = userNum.split("");

    for (let i = 0; i < comNumArray.length; i++) {
      if (comNumArray[i] === userNumArray[i]) {
        strike++;
      } else if (comNumArray.indexOf(userNumArray[i]) > -1) {
        ball++;
      }
    }

    if (this.scount === 3) {
      result.innerHTML = "정답입니다.";
      let restartButton = document.createElement("button");
      restartButton.innerText = "재시작";
      restartButton.addEventListener("click", restart);
      document.body.appendChild(restartButton);
    } else if (this.scount === 0 && this.bcount === 0) {
      result.innerHTML = "낫싱";
    } else {
      result.innerHTML = `${this.scount} 스트라이크 ${this.bcount} 볼`;
    }
  }
}

function restart() {
  window.location.reload();
}
