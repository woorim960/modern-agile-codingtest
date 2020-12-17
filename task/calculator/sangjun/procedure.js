// calculator/procedure.js
"use strict"; // ECMAScript 문법을 준수하겠다는 의미 -> const, let 등등..

const inputTxt = document.querySelector("#input-txt"),
  btnCalc = document.querySelector("#calc"),
  resultSpace = document.querySelector("#result"),
  btnReset = document.querySelector("#resetButton"),
  baseText = document.querySelector("#basetext"); 
  
function init() {
  btnCalc.addEventListener("click", run);
  btnReset.addEventListener("click", reset);
}

function run() {
  let inText = inputTxt.value;
  if (inText === "exit") {
    exit();
  } else if (isNaN(opercheck(inText))) {
    alert("잘못된 입력으로 계산기를 없앴습니다. 다시 사용하고 싶으시다면 새로고침을 하십시오.");
    inputTxt.parentNode.removeChild(inputTxt);
    btnCalc.parentNode.removeChild(btnCalc);
    btnReset.parentNode.removeChild(btnReset);
    baseText.parentNode.removeChild(baseText);
  } else {
    resultSpace.innerHTML = opercheck(inText);
  }
}

function reset() {
  inputTxt.value = "";
  resultSpace.innerHTML = "";
}

function opercheck(inText) {
  const ops = ['*', '/', '+', '-'] ;
  let str = inText.replace(/[*\/+-]/g, " $& ").split(" ");
  let idx;
  for (let op of ops) {
    while (str.includes(op)) {
      idx = str.indexOf(op);
      str.splice(idx - 1, 3, calcul(parseFloat(str[idx - 1]), parseFloat(str[idx + 1]), op));//0번인덱스 3개요소제거
    }
  }
  return str;
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
}

function exit(){
  alert("종료");
}

init();
