"use strict"; // ECMAScript 문법을 준수하겠다는 의미 -> const, let 등등..
const inputTxt = document.querySelector("#input-txt"),
  btnCalc = document.querySelector("#calc"),
  resultSpace = document.querySelector("#result"); // resultSpace.innerHTML = "결과를 출력할 값" -> 이와 같은 식으로 결과를 출력하면 됨.

const OPERATION = ["*", "/", "-", "+"];

function init() {
  /*
   * 초기 실행 함수
   */
  btnCalc.addEventListener("click", run); // 버튼을 클릭하면 run() 함수가 실행된다.
}

function run() {
  let arr = inputTxt.value.replace(/[-*\+\/%]/g, " $& ").split(" ");
  arr = deleteEmpty(arr);
  arr = subtractFirstNum(arr);
  arr = processMinusNum(arr);
  arr = sliceArray(OPERATION, arr);

  print(arr);
}

function processMinusNum(arr) {
  let idx;
  for (let val of arr) {
    if (val === "-") {
       idx = arr.indexOf(val);
       if (OPERATION.includes(arr[idx - 1])) {
          arr.splice(idx, 2, val + arr[idx + 1]);
       }
    }
  }
  return arr;
}

function print(arr) {
  if (inputTxt.value === "exit") {
    exit();
  }
  
  if (Number(arr)) {
    resultSpace.innerHTML = arr;
  } else {
    resultSpace.innerHTML = "제대로 입력해주세요;;";
    nodeDelete();
  }
}

function calculator(basicNum, nextNum, resultOper) {
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
  
  function deleteEmpty(arr) {
    let idx;
    while (arr.includes("")) {
      idx = arr.indexOf("");
      arr.splice(idx, 1);
    }
    return arr;
  }

  function subtractFirstNum(arr) {
    if (arr[0] === '-') {
      arr.splice(0, 2, arr[1] * (-1));
    }
    return arr;
  }

  function sliceArray(OPERATION, arr) {
    let idx;
    for (let op of OPERATION) {
      while (arr.includes(op)) {
        idx = arr.indexOf(op);
        arr.splice(idx - 1, 3, calculator(parseFloat(arr[idx - 1]), parseFloat(arr[idx + 1]), op));
      }
    }
    return arr;
  }
  
  function nodeDelete() {
    inputTxt.parentNode.removeChild(inputTxt);
    btnCalc.parentNode.removeChild(btnCalc);
  }

  function exit() {
    self.close();
  }
  
init();
