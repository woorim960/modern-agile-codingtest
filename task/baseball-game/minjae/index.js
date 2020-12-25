'use strict';

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
      this.setRandomNumbers();
    }

    //랜덤 숫자 셋팅
    setRandomNumbers() {
      const randomNumbers = [];

      while (randomNumbers.length < NUMBER_SIZE) {
        let candidate = Math.floor((Math.random() * 9) + 1);
        if (!randomNumbers.includes(candidate)) {
          randomNumbers.push(candidate);
        }
      }
      this.computerInputNumbers = randomNumbers.join('');
      
      console.log(this.computerInputNumbers);
    }

 
    //사용자 입력 값 가져오기
    handleUserInput = e => {
      this.userInputNumbers = e.target.value;

      console.log(this.userInputNumbers);
    }

    //사용자 input 값의 유효성 검사
    numberValidator = () => {
      const userInputNumbersArray = this.userInputNumbers.split('');
      const setUserInput = new Set(this.userInputNumbers);

      userInputNumbersArray.some(value => {
        if (isNaN(parseInt(value))) {
          alert("숫자만 입력해주세요.");
        }
        return false;
      });
  
      if (this.userInputNumbers.length !== NUMBER_SIZE) {
          alert("숫자 길이가 다릅니다.");
          return false;
      }
      
      if (setUserInput.size !== NUMBER_SIZE) {
        alert("숫자가 중복됩니다.");
        return false;
      }
      return true;
    }

    //사용자 입력 값 보내기
    onSubmit = () => {
      let a = this.numberValidator();
      if(!a){
        console.log('잘못입력함');
      }
    }

    // //스트라이크, 볼, 낫싱카운터 체크
    // onCounterCheck = () => {

    // }

    // //결과물 출력
    // onResultShow = () => {

    // }

    // play(computerInputNumbers, userInputNumbers) {
    //   return "결과 값 String";
    // }
}
  new BaseballGame();
  