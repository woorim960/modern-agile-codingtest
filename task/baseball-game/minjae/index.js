export default class BaseballGame {
    constructor() {
        this.computerInputNumbers;
        this.userInputNumbers;

        this.userInput = document.querySelector('#user-input');
        this.submitBtn = document.querySelector('#submit');
        this.resultSection = document.querySelector('#result');
        
        this.userInput.addEventListener('keyup', this.handleUserInput);
        this.submitBtn.addEventListener('click', this.onConfirm);

        this.gameInit()
    }

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
  }
  
  new BaseballGame();