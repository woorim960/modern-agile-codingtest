'use strict';

import { setRandomNumbers } from './setRandomNumbers.js';
import { numberValidator } from './numberValidator.js';

const NUMBER_SIZE = 3;

export default class BaseballGame {
    constructor() {
        this.userInput = document.querySelector('#user-input');
        this.submitBtn = document.querySelector('#submit');
        this.resultSection = document.querySelector('#result');

        this.computerInputNumbers;
        this.userInputNumbers;
        
        this.userInput.addEventListener('keyup', this.handleUserInput);
        this.submitBtn.addEventListener('click', this.onSubmit);

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
    onSubmit = () => {
      const isValid = this.inputValidator();
      if(isValid) {
        onCounterCheck(this.computerInputNumbers, this.userInputNumbers)
      }
    }

    // //스트라이크, 볼, 낫싱카운터 체크
    // onCounterCheck = () => {

    // }

    // //결과물 출력
    // onResultShow = () => {

    // }

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
}
  new BaseballGame();
  