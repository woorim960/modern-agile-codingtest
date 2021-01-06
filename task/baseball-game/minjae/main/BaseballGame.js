'use strict';

import RandomNumbers from '../src/Random.js';
import Validator from '../src/Validator.js';
import CounterCheck from '../src/CounterCheck.js';
import ViewResult from '../src/ViewResult.js';
import User from '../src/User.js';
import Restart from '../src/Restart.js';
import { userInput, submitBtn, resultSection } from '../utils/DOM.js';

export default class BaseballGame {
    constructor() {
      this.computerInputNumbers
      this.userInputNumbers
    }  

    //게임초기화
    gameInit() {
      userInput.addEventListener('keyup', this.handleUserInput);
      submitBtn.addEventListener('click', this.play);

      this.computerInputNumbers = RandomNumbers.getRandomNumbers();
      resultSection.innerHTML = '';

      console.log(this.computerInputNumbers);
    }

    //입력 값 가져오기
    handleUserInput = () => {
      this.userInputNumbers = User.getUserInput();
    }

    //play
    play = () => {
      const isValid = Validator.numberValidator(this.userInputNumbers);

      if (isValid) {
        const result = CounterCheck.getBallAndStrikeCount(this.computerInputNumbers, this.userInputNumbers);

        ViewResult.viewResultShow(result, Restart.restartForm);
      }
    }
}