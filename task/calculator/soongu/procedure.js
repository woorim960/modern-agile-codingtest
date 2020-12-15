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
  const ops = ['*', '/', '-', '+', '%'];
  const input = inputTxt.value;

  let arr = strToarr(input);
  arr = deleteSpace(arr);
  arr = startNegative(arr);
  arr = arraySlice(ops, arr);
  output(arr);

  if (input === "exit") {
    exit();
  }
}

function calculate(first, second, op) {
  switch (op) {
    case "+":
      return first + second;
      break;
    case "-":
      return first - second;
      break;
    case "/":
      return first / second;
      break;
    case "*":
      return first * second;
      break;
    case "%":
      return first % second;
      break;
    default:
      throw Error("Unknown command");
      break;
  }
}

function strToarr(input) {
  return input.replace(/[*\-+\/%]/g, " $& ").split(" ");
}

function deleteSpace(arr) {
    let idx;
    while (arr.includes("")) {
      idx = arr.indexOf("");
      arr.splice(idx, 1);
    }
    return arr;
}

function startNegative(arr) {
  if (arr[0] === "-") {
    arr.splice(0, 2, arr[1] * (-1));
  }
  return arr;
}

function arraySlice(ops, arr) {
  let idx;
  for (let op of ops) {
    while (arr.includes(op)) {
      idx = arr.indexOf(op);
      arr.splice(idx - 1, 3, calculate(parseFloat(arr[idx - 1]), parseFloat(arr[idx + 1]), op));
    }
  }
  return arr;
}

function output(arr) {
  if (!isNaN(arr)) {
    resultSpace.innerHTML = Math.round(arr * 100) / 100.0;
  } else {
    resultSpace.innerHTML = "입력이 잘못되었습니다.";
    inputTxt.parentNode.removeChild(inputTxt);
    btnCalc.parentNode.removeChild(btnCalc);
  }
}

function exit() {
  alert("종료");
}

init();
