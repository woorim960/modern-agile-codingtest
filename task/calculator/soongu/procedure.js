// calculator/procedure.js
"use strict"; // ECMAScript 문법을 준수하겠다는 의미 -> const, let 등등..

const inputTxt = document.querySelector("#input-txt"),
  btnCalc = document.querySelector("#calc"),
  resultSpace = document.querySelector("#result"); // resultSpace.innerHTML = "결과를 출력할 값" ->
                                                    // 이와 같은 식으로 결과를 출력하면 됨.

function init() {
  /*
   * 초기 실행 함수
   */

  btnCalc.addEventListener("click", run); // 버튼을 클릭하면 run() 함수가 실행된다.
}

function run() {
    const first = parseInt((inputTxt.value.split(' '))[0]);
    const second = parseInt(inputTxt.value.split(' ')[2]);
    const op = inputTxt.value.split(' ')[1];
    exit();
    if (!isNaN(calculate(first, second, op))) {
      resultSpace.innerHTML = calculate(first, second, op);
    } else {
      resultSpace.innerHTML = "입력이 잘못되었습니다.";
    }
}

function calculate(first, second, op) {
  switch (op) {
    case '+' :
        return first + second;
        break;
    case '-' :
        return first - second;
        break;
    case '/' :
        return first / second;
        break;
    case '*' :
        return first * second;
        break;
    case '%' :
        return first % second;
        break;
    default :
        throw Error('Unknown command')
        break;
    }
};

function exit() {
  if (inputTxt.value === "exit") 
    alert ("종료");
}

init();
