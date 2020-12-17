"use strict"; // ECMAScript 문법을 준수하겠다는 의미 -> const, let 등등..

const inputTxt = document.querySelector("#input-txt"),
  btnCalc = document.querySelector("#calc"),
  resultSpace = document.querySelector("#result"); // resultSpace.innerHTML = "결과를 출력할 값" -> 이와 같은 식으로 결과를 출력하면 됨.

const OPERATION = ["-", "*", "/", "+"];

function init() {
  /*
   * 초기 실행 함수
   */
  btnCalc.addEventListener("click", run); // 버튼을 클릭하면 run() 함수가 실행된다.
}

function run() {
  const arr = inputTxt.value.replace(/(\s*)/g, "");
  let result;

  if (arr.includes(OPERATION) === false) {
    resultSpace.innerHTML = "잘 좀 입력해봐";
  }

  for (let i = 0; i < OPERATION.length; i++) {
    if (arr.includes(OPERATION[i])) {
      result = arr.split(OPERATION[i]);
      printCalcurate(result, OPERATION[i]);
    } else if (inputTxt.value === "exit") {
      resultSpace.innerHTML = "exit";
    }
  }
}

function printCalcurate(result, resultOper) {
  let calc;
  calc = calculator(parseFloat(result[0]), parseFloat(result[1]), resultOper);

  resultSpace.innerHTML = calc;
}

function calculator(first, second, resultOper) {
  let answer = 0;

  switch (resultOper) {
    case "+":
      answer = first + second;
      break;
    case "-":
      answer = first - second;
      break;
    case "*":
      answer = first * second;
      break;
    case "/":
      answer = first / second;
      break;
  }

  return answer;
}

init();
