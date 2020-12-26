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
        console.log(result);
        onResultShow(result);
      } 
    }

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
}
  new BaseballGame();
  