'use strict';

import { setRandomNumbers } from './src/setRandomNumbers.js';
import { numberValidator } from './src/numberValidator.js';
import { onCounterCheck } from './src/onCounterCheck.js';
import { onResultShow } from './src/onResultShow.js';

export default class BaseballGame {
    constructor() {
        this.userInput = document.querySelector('#user-input');
        this.submitBtn = document.querySelector('#submit');
        this.resultSection = document.querySelector('#result');
        this.appSection = document.querySelector('#app');

        this.computerInputNumbers;
        this.userInputNumbers;
        
        this.userInput.addEventListener('keyup', this.handleUserInput);
        this.submitBtn.addEventListener('click', this.onSubmitClick);

        this.gameInit();
    }

    //게임초기화
    gameInit() {
      this.computerInputNumbers = setRandomNumbers();
      console.log(this.computerInputNumbers);
    }
 
    // 사용자 입력 값 가져오기
    handleUserInput = e => {
      this.userInputNumbers = e.target.value;
    }

    //사용자 입력 값 유효성 검사
    inputValidator() {
      return numberValidator(this.userInputNumbers);
    }

    //사용자 입력 값 보내기
    onSubmitClick = () => {
      const isValid = this.inputValidator();
      if (isValid) {
        let result = onCounterCheck(this.computerInputNumbers, this.userInputNumbers);
        onResultShow(result, this.onRestartForm);
      }
    }

    //재시작 폼
    onRestartForm = () => {
      const divSection = document.createElement('div');
      const reStartSection = this.appSection.appendChild(divSection);

      reStartSection.classList.add('restart-section');

      const restartForm = document.querySelector('.restart-section');

      restartForm.innerHTML = `
          <p> 다시 시작하시겠습니까? </p>
          <button class="restart-btn"> 재시작 버튼 </button>
      `;

      const restartBtn = document.querySelector('.restart-btn');

      restartBtn.addEventListener('click', () => {
        this.gameInit();
        this.appSection.removeChild(reStartSection);
        this.resultSection.innerHTML = '';
      });
  }

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
}
  new BaseballGame();
  