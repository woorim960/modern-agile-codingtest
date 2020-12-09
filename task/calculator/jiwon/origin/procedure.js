// calculator/procedure.js
"use strict"; // ECMAScript 문법을 준수하겠다는 의미 -> const, let 등등..

const inputTxt = document.querySelector("#input-txt"),
  btnCalc = document.querySelector("#calc"),
  resultSpace = document.querySelector("#result"), // resultSpace.innerHTML = "결과를 출력할 값" -> 이와 같은 식으로 결과를 출력하면 됨.
  resetBtn = document.querySelector("#reset");

let result = 0;

function init() {
  btnCalc.addEventListener("click", run); // 버튼을 클릭하면 run() 함수가 실행된다.
  resetBtn.addEventListener("click", reset);
}

function run() {
  if (inputTxt.value.toString() === "exit") {
    exit ("종료");
  } else if(isNaN(changeArray(inputTxt))) {
    exit("잘못된입력");
  }else {
    resultSpace.innerHTML = changeArray(inputTxt);
    result = 0; 
  }
}

function exit (str) {
  inputTxt.parentNode.removeChild(inputTxt);
  btnCalc.parentNode.removeChild(btnCalc);
  resetBtn.parentNode.removeChild(resetBtn);
  let heading = document.createElement("h1");
  let headingTxt = document.createTextNode(str);
  heading.appendChild(headingTxt);
  document.body.appendChild(heading);
}

function changeArray(string) {
  const operators = ['*', '/', '+', '-'];
  let changeString = string.value;
  
  for (let op of operators) {
    while (changeString.includes(op)) {

      if (changeString.includes(op)) {
        changeString = calc (changeString, op);

        if (changeString.includes('-')) {
          break;
        }
      }
    }
  } 
  return changeString;
}

function calc (changeString, op) {
  switch (op) {
    case "*" :
      changeString = mul(changeString);
      break;
    case "/" :
      changeString = div(changeString);
      break;
    case "+" :
      changeString = add(changeString);
      break;
    case "-" :
      changeString = sub(changeString);
      break;
  }
  return changeString;
}

function calc(op) {
  switch (op) {
    case "*":
      mul();
  }
}

function reset() {
  inputTxt.value = "";
  resultSpace.innerHTML = "";
}

function add(string) {
  const opers = ['*', '/', '-'];
  const coma = ",";
  let arr,addArr;
  for (let op of opers) {
    arr = string.split(op).join(coma);
  }
  arr = arr.split(coma);

  for (let seq = 0; seq < arr.length; seq++) {
    if (arr[seq].includes("+")) {
      //+있는지 한번 더 확인
      addArr = arr[seq].split("+"); //+기준으로 나눔
      result = 0;
      addArr.forEach(function (ele) {
        result += parseFloat(ele);
      });
      string = string.replace(arr[seq], result); //문자열자리에 result값 넣어줌
    }
  }
  return string;
}

function sub(string) {
  const opers = ['*', '/', '+'];
  const coma = ",";
  let arr,subArr;
  for (let op of opers) {
    arr = string.split(op).join(coma);
  }
  arr = arr.split(coma);
  
  for (let seq = 0; seq < arr.length; seq++) {
    if (arr[seq].includes("-")) {
      subArr = arr[seq].split("-");
      result = (parseFloat(subArr[0]) * 2).toString();
      subArr.forEach(ele => {
        result -= parseFloat(ele);
        return result;
      });
      string = string.replace(arr[seq], result);
    }
  }
  return string;
}

function div(string) {
  const opers = ['*', '+', '-'];
  const coma = ",";
  let arr,divArr;
  for (let op of opers) {
    arr = string.split(op).join(coma);
  }
  arr = arr.split(coma);
  for (let seq = 0; seq < arr.length; seq++) {
    if (arr[seq].includes("/")) {
      divArr = arr[seq].split("/");
      result = parseFloat(divArr[0]); //나누기할 때 0값은 undefined
      for (let divSeq = 1; divSeq < divArr.length; divSeq++) {
        result = result / parseFloat(divArr[divSeq]);
      }
      string = string.replace(arr[seq], result.toFixed(1));
    }
  }
  return string; //소수점x 반올림해서 계산
}

function mul(string) {
  const opers = ['+', '/', '-'];
  const coma = ",";
  let arr,mulArr;
  for (let op of opers) {
    arr = string.split(op).join(coma);
  }
  arr = arr.split(coma);

  for (let seq = 0; seq < arr.length; seq++) {
    if (arr[seq].includes("*")) {
      mulArr = arr[seq].split("*");
      result = 1; //곱하기할 때 0값은 undefined
      mulArr.forEach(ele => {
        result *= parseFloat(ele);
        return result;
      });
      string = string.replace(arr[seq], result);
    }
  }
  return string;
}

init();
