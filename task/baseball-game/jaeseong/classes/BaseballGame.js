"use strict";

export default class BaseballGame {
  play(comNum, userNum) {
    let strike = 0;
    let ball = 0;
    
    for (let i = 0; i < comNum.length; i++) {
      if (comNum[i] === userNum[i]) {
        strike++;
      } else if (comNum.indexOf(userNum[i]) > -1) {
        ball++;
      }
    }

    if (strike === 3) {
      result.innerHTML = "정답입니다.";
      let restartButton = document.createElement("button");
      restartButton.innerText = "재시작";
      restartButton.addEventListener("click", restart);
      document.body.appendChild(restartButton);
    } else if (this.scount === 0 && this.bcount === 0) {
      result.innerHTML = "낫싱";
    } else {
      result.innerHTML = `${strike} 스트라이크 ${ball} 볼`;
    }
  }
}

function restart() {
  window.location.reload();
}
