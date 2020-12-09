// calculator/procedure.js
"use strict"; // ECMAScript 문법을 준수하겠다는 의미 -> const, let 등등..

const inputTxt = document.querySelector("#input-txt"),
  btnCalc = document.querySelector("#calc"),
  resultSpace = document.querySelector("#result"); // resultSpace.innerHTML = "결과를 출력할 값" -> 이와 같은 식으로 결과를 출력하면 됨.

function init() {
  btnCalc.addEventListener("click", run);
}

function run() {
  const arr = text.split();
  if (text === "exit") {
    resultSpace.innerHTML = "종료.";
  } else {
    resultSpace.innerHTML = calcul(parseInt(arr[0]), parseInt(arr[2]), arr[1]);
  }
}

function calcul(first, second, op) {
  let result;
  if (op === "+") {
    return (result = first + second);
  } else if (op === "-") {
    return (result = first - second);
  } else if (op === "*") {
    return (result = first * second);
  } else if (op === "/") {
    return (result = first / second);
  }

  return `잘못된 입력`;
}

init();
