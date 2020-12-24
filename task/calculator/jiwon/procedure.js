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
  const string = inputTxt.value;
  if (string === "exit") {
    exit("종료");
  } else if(isNaN(changeArray(string))) {
    exit("잘못된입력");
  }else {
    resultSpace.innerHTML = changeArray(string);
    result = 0; 
  }
}

function exit (str) {
  remove (inputTxt);
  remove (btnCalc);
  remove (resetBtn);
  remove (resultSpace);
  let heading = document.createElement("h1");
  let headingTxt = document.createTextNode(str);
  heading.appendChild(headingTxt);
  document.body.appendChild(heading);
}

function remove (str) {
  return str.parentNode.removeChild(str);
}
//입력 버튼 시 실행 함수
function changeArray(changeStr) {
  const operators = ['*', '/', '+', '-'];

  for (let op of operators) {
    while (changeStr.includes(op)){
      if (changeStr.includes(op)){
        changeStr = calc(changeStr, op);
      }
      if (changeStr.includes('-')) {
        break;
      }
    }
  } 
  return changeStr;
}
//계산처리
function calc (changeStr, op) {
  switch (op) {
    case "*" :
      changeStr = mul(changeStr);
    case "/" :
      changeStr = div(changeStr);
    case "+" :
      changeStr = add(changeStr);
    case "-" :
      changeStr = sub(changeStr);
    default:
      break;
  }
  return changeStr;
}


//reset버튼 누를시
function reset() {
  inputTxt.value = "";
  resultSpace.innerHTML = "";
}


function add(str) {
  const opers = ['*', '/', '-'];
  const coma = ",";
  let addArr, arr = str;

  for (let op of opers) {
    arr = arr.split(op).join(coma);
  }
  arr = arr.split(coma);
  for (let seq = 0; seq < arr.length; seq++) {
    if (arr[seq].includes("+")) {
      addArr = arr[seq].split("+"); //+기준으로 나눔
      result = 0;
      addArr.forEach(function (ele) {
        result += parseFloat(ele);
      });
      str = str.replace(arr[seq], result); //문자열자리에 result값 넣어줌
    }
  }
  return str;
}

function sub(str) {
  const opers = ['*', '/', '+'];
  const coma = ",";
  let subArr, arr =str;
  
  for (let op of opers) {
    arr = arr.split(op).join(coma);
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
      str = str.replace(arr[seq], result);
    }
  }
  return str;
}

function div(str) {
  const opers = ['*', '+', '-'];
  const coma = ",";
  let divArr, arr = str;

  for (let op of opers) {
    arr = arr.split(op).join(coma);
  }
  arr = arr.split(coma);
  for (let seq = 0; seq < arr.length; seq++) {
    if (arr[seq].includes("/")) {
      divArr = arr[seq].split("/");
      result = parseFloat(divArr[0]); //나누기할 때 0값은 undefined
      for (let divSeq = 1; divSeq < divArr.length; divSeq++) {
        result = result / parseFloat(divArr[divSeq]);
      }
      str = str.replace(arr[seq], result.toFixed(1));
    }
  }
  return str; //소수점x 반올림해서 계산
}

function mul(str) {
  const opers = ['+', '/', '-'];
  const coma = ",";
  let mulArr, arr = str;

  for (let op of opers) {
    arr = arr.split(op).join(coma);
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
      str = str.replace(arr[seq], result);
    }
  }
  return str;
}

init();
