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
   let ops = ['+', '-', '*', '/', '%'];
   let first;
   let second;
   for (let op of ops) {
      first = Number(inputTxt.value.split(op)[0]);
      second = Number(inputTxt.value.split(op)[1]);
     if(inputTxt.value.includes(op)) {
        if (!isNaN(calculate(first, second, op))) {
          resultSpace.innerHTML = (Math.round((calculate(first, second, op))*100)/100.0);
        } else {
          resultSpace.innerHTML = "입력이 잘못되었습니다.";
        }
      }
   }
    exit();
}

function calculate(first, second, op) {
  switch (op) {
    case '+' :
        return Number(first + second);
        break;
    case '-' :
        return Number(first - second);
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
