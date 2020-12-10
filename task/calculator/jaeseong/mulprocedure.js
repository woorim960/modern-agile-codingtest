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
  let arr = inputTxt.value.replace(/[-*+\/]/g,"$&").split(" ");
  let calc;
  if(inputTxt.value === "exit"){
    exit();
  }
  for(let op of OPERATION) {
    let idx;
    while(arr.includes(op)) {
      idx = arr.indexOf(op); 
      calc = arr.splice(idx - 1, 3, calculator(parseFloat(arr[idx - 1]), op, parseFloat(arr[idx + 1])));
    }
  }
  if(Number(arr)){
  resultSpace.innerHTML = arr;
  }
  else{
  resultSpace.innerHTML = "뭐야 이게";
  }
}

function calculator(basicNum, resultOper,nextNum) {
  let answer = 0;

    switch (resultOper) {
    case "*":
      answer = basicNum * nextNum;
      break;
    case "/":
      answer = basicNum / nextNum;
      break;
    case "+":
      answer = basicNum + nextNum;
      break;
    case "-":
      answer = basicNum - nextNum;
      break;
    default:
      throw Error("Unknown command");
      break;
    }
  return answer;
  }

  function exit() {
    self.close();
  }
  
init();
