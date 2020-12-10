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

function playArithmetic(string){
  const ops = ['*', '/', '+', '-'] ;
  let str = string.value;
  let idx, middleResult ;
  for (let op of ops) {
    while (str.includes(op)) {
      idx = str.indexOf(op); 
      middleResult = calculator(str[idx - 1],op, str[idx + 1]);
      console.log(middleResult);
      str = str.replace(str.substr(str.indexOf(op) -1, 3), middleResult) ;
      console.log(str);
      if (str.includes(op)){
      }else {
        break;
      }
    }
  }
  return str;
}

function calculator(first, op, second){
  first = parseFloat(first);
  second = parseFloat(second);
  if (op.includes('*')){
    let result = first * second ;
    return result ;
  } else if (op.includes('/')) {
    let result = first / second ;
    return result ;
  } else if (op.includes('+')) {
    let result = first + second ;
    return result ;
  } else if (op.includes('-')) {
    let result = first - second ;
    return result ;
  } 
}

init();
