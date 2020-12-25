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
    //게임초기화
    gameInit() {
      this.setRandomNumber();
      this.resultSection.innerHTML = '';
    }
    //랜덤 숫자 셋팅
    setRandomNumber() {
      
    }
    //사용자 입력 값
    handleUserInput = e => {

    }
    //사용자 입력 값 유효성 검사
    numberValidate() {

    }
    
    onConfirm = () => {

    }
    //카운터 체크
    onCounterCheck = () => {

    }
    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
  }
  
  new BaseballGame();