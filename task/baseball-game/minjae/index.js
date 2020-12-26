'use strict';

import { setRandomNumbers } from './src/setRandomNumbers.js';
import { numberValidator } from './src/numberValidator.js';
import { onCounterCheck } from './src/onCounterCheck.js';
import { onResultShow } from './src/onResultShow.js';

const SUCCESS_MESSAGE = '🎉 CONGRATULATION!! 🎉';
const NOTHING_MESSAGE = '😥 NOTHING 😥';

export default class BaseballGame {
    constructor() {
      this.computerInputNumbers;
      this.userInputNumbers;

      this.appSection = document.querySelector('#app');
      this.userInput = document.querySelector('#user-input');
      this.submitBtn = document.querySelector('#submit');
      this.resultSection = document.querySelector('#result');
        
      this.userInput.addEventListener('keyup', this.handleUserInput);
      this.submitBtn.addEventListener('click', this.onConfirmClick);

      this.gameInit();
    }
    
    //게임초기화
    gameInit() {
      this.computerInputNumbers = setRandomNumbers();
      this.resultSection.innerHTML = '';
      console.log(this.computerInputNumbers);
    }
 
    // 사용자 입력 값 가져오기
    handleUserInput = e => {
      this.userInputNumbers = e.target.value;
    }

    //사용자 입력 값 유효성 검사, 카운터 체크, 결과 보여주기
    onConfirmClick = () => {
      const isValid = numberValidator(this.userInputNumbers);

      if (isValid) {
        const result = onCounterCheck(this.computerInputNumbers, this.userInputNumbers);

        onResultShow(result, this.onRestartForm);
      }
    }

    //재시작 폼
    onRestartForm = () => {
      const divSection = document.createElement('div');
      const restartSection = this.appSection.appendChild(divSection);

      restartSection.classList.add('restart-section');

      const restartForm = document.querySelector('.restart-section');

      restartForm.innerHTML = `
          <p class="restart-question"> 게임을 다시 시작하시겠습니까? </p>
          <button class="restart-btn"> 재시작 버튼 </button>
      `;

      const restartBtn = document.querySelector('.restart-btn');

      restartBtn.addEventListener('click', () => {
        this.gameInit();
        this.appSection.removeChild(restartSection);
      });
    }

    // play 메서드
    play(computerInputNumbers, userInputNumbers) {
      const isValid = numberValidator(userInputNumbers);
      
      let result = '';
      if (isValid) {
        const Counter = onCounterCheck(computerInputNumbers, userInputNumbers);
        const { ballCount, strikeCount } = Counter;

        if (ballCount === 0 && strikeCount === 0) {
          result = NOTHING_MESSAGE;
        }
        if (ballCount !== 0) {
          result = `볼 카운트: ${ballCount} `;
        }
        if (strikeCount !== 0) {
          result += `스트라이크 카운트: ${strikeCount} `;
          if (strikeCount === 3) {
            result = SUCCESS_MESSAGE;
          }
        } 
      }
        return console.log(result);
    }
}

const baseballgame =  new BaseballGame();

baseballgame.play('123','123');
baseballgame.play('123','456');
baseballgame.play('123','321');
baseballgame.play('123','124');
