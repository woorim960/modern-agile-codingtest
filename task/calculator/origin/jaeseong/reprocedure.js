// calculator/procedure.js
"use strict"; // ECMAScript 문법을 준수하겠다는 의미 -> const, let 등등..
const inputTxt = document.querySelector("#input-txt"),
  btnCalc = document.querySelector("#calc"),
  resultSpace = document.querySelector("#result"); // resultSpace.innerHTML = "결과를 출력할 값" -> 이와 같은 식으로 결과를 출력하면 됨.
function init() {
  /*
   * 초기 실행 함수
   */
  btnCalc.addEventListener("click", run); // 버튼을 클릭하면 run() 함수가 실행된다.
}
function run() {
const inputTxtValue = inputTxt.value;
const inputReplace = inputTxtValue.replace(/(\s*)/g,"");
const arr = inputReplace.substring();
const num1 = parseFloat(arr[0]);
const num2 = parseFloat(arr[2]);
const operation = arr[1];
console.log(arr);
  calculator(num1, num2, operation);
}
function calculator(num1, num2, operation){
  let answer = 0;
  switch (operation){
    case '+' :
      answer = num1 + num2;
      break;
    case '-' :
      answer = num1 - num2;
      break;
    case '*' :
      answer = num1 * num2;
      break;
    case '/' :
      answer = num1 / num2;
      break;
    default :
      answer = "잘못 입력했습니다.";
  }
  if (inputTxt.value === '종료'){
    resultSpace.innerHTML = 'exit';
  } else {
    resultSpace.innerHTML = answer;
  }
}
init();
