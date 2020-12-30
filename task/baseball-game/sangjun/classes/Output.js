'use strict';
import {resultSpace} from '../classes/DOM.js';

export default class Output{

  
  readout(strikecount, ballcount){
    if (strikecount === 3) {
      this.getright();
    } else if (!ballcount && !strikecount) {
      resultSpace.innerHTML = '낫싱';
      return;
    } 
     resultSpace.innerHTML = `${ballcount}볼 ${strikecount}스트라이크`;
  }

   getright() {
    let answer = document.createElement('div');
    let answerTxt = document.createTextNode(`🎉정답을 맞추셨습니다!🎉`);
    let restartGame = document.createElement('div');
    let askRestartGame = document.createTextNode(`게임을 새로 시작하시겠습니까?`);

    answer.appendChild(answerTxt);
    document.body.appendChild(answer);
    restartGame.appendChild(askRestartGame);
    document.body.appendChild(restartGame);
    this.restart();
  }

  restart(){
    let button = document.createElement('button');
    button.innerHTML = `게임 재시작`;
    button.addEventListener('click', this.reset());
    document.body.appendChild(button);
    
  }

  reset() {
    window.location.reload();
  }


}