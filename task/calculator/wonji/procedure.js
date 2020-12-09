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
  if (inputTxt.value.toString() === "exit") {
    resultSpace.innerHTML = "종료";
  } else {
    resultSpace.innerHTML = playArithmetic(inputTxt);
  }
}

function playArithmetic(string) {
  let result = eval("");
  return result;
}

init();
