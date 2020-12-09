// calculator/procedure.js
"use strict"; // ECMAScript 문법을 준수하겠다는 의미 -> const, let 등등..

const inputTxt = document.querySelector("#input-txt"),
  btnCalc = document.querySelector("#calc"),
  resultSpace = document.querySelector("#result"); // resultSpace.innerHTML = "결과를 출력할 값" -> 이와 같은 식으로 결과를 출력하면 됨.
  
function init() {
  btnCalc.addEventListener("click", run);
}
function run() {
  if (inputTxt.value.toString() === "exit"){
    resultSpace.innerHTML = "종료."
  } else {
    resultSpace.innerHTML = calcul();
  }
  
}

function calcul() {
  const num1 = parseInt(inputTxt.value.split(' ')[0]);
  const num2 = parseInt(inputTxt.value.split(' ')[2]);
  const op = inputTxt.value.split(' ')[1];
  let result;
  if (op === '+'){
    return result = num1 + num2;
   } else if (op === '-'){
    return result = num1 - num2;
   } else if (op === '*'){
    return result = num1 * num2;
   } else if (op === '/'){
    return result = num1 / num2;
  }
  return `잘못된 입력`;
}

init();
