'use strict';

import RandomNumbers from './src/getRandomNumbers.js';
import Validator from './src/numberValidator.js';
import CounterCheck from './src/counterCheck.js';
import ViewResult from './src/viewResult.js';
import PlayResult from './src/playResult.js';
import User from './src/getUserInput.js';
import Restart from './src/restartForm.js';
import { userInput, submitBtn, resultSection } from './utils/DOM.js';

export default class BaseballGame {
    constructor() {
      this.computerInputNumbers;
      this.userInputNumbers;

      userInput.addEventListener('keyup', this.handleUserInput);
      submitBtn.addEventListener('click', this.onConfirmClick);
    }
    
    //게임초기화
    gameInit() {
      this.computerInputNumbers = RandomNumbers.getRandomNumbers();
      resultSection.innerHTML = '';

      console.log(this.computerInputNumbers);
    }
 
    // 사용자 입력 값 가져오기
    handleUserInput = () => {
      this.userInputNumbers = User.getUserInput();
    }

    /*
      사용자 입력 값 유효성 검사, 
      카운터 체크, 
      결과 or 재시작 폼 보여주기
    */
    onConfirmClick = () => {
      const isValid = Validator.numberValidator(this.userInputNumbers);

      if (isValid) {
        const result = CounterCheck.getBallAndStrikeCount(this.computerInputNumbers, this.userInputNumbers);

        ViewResult.viewResultShow(result, Restart.restartForm);
      }
    }

    // play 메서드
    play(computerInputNumbers, userInputNumbers) {
      const isValid = Validator.numberValidator(userInputNumbers);
      
      let result = '';
      if (isValid) {
        const Counter = CounterCheck.getBallAndStrikeCount(computerInputNumbers, userInputNumbers);
        result = PlayResult.playResultShow(Counter);
      }
      return console.log(result);
    }
}
