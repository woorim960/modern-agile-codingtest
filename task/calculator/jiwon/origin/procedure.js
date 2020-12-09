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
    resultSpace.innerHTML = "종료";
  } else {
    resultSpace.innerHTML = changeArray(inputTxt);
    result = 0;
  }
}

function changeArray(string) {
  let changeString = string.value;
  for (let op of operators) {
    while (changeString.includes(op)) {
      if (changeString.includes(op)) {
        changeString = calc(changeString);
      }
    }
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
  const operators = ["*", "/", "+", "-"];
  const comma = ",";
  for (let op of operators) {
    string.split(op).join(comma);
  }

  let array = string
    .split("/")
    .join(",")
    .split("-")
    .join(",")
    .split("*")
    .join(",")
    .split(","); //+를 가진 문자열만 고름
  let addArr;
  for (let seq = 0; seq < array.length; seq++) {
    if (array[seq].includes("+")) {
      //+있는지 한번 더 확인
      addArr = array[seq].split("+"); //+기준으로 나눔
      result = 0;
      addArr.forEach(function (ele) {
        result += parseFloat(ele);
        return result;
      });
    }
    string = string.replace(array[seq], result); //문자열자리에 result값 넣어줌
  }
  return string;
}

function sub(string) {
  let array = string
    .split("+")
    .join(",")
    .split("/")
    .join(",")
    .split("*")
    .join(",")
    .split(",");

  let subArr;
  함수();

  return string;
}

function 함수() {
  for (let seq = 0; seq < array.length; seq++) {
    if (array[seq].includes("-")) {
      subArr = array[seq].split("-");
      result = (parseFloat(subArr[0]) * 2).toString();
      subArr.forEach((ele) => {
        result -= parseFloat(ele);
        return result;
      });

      string = string.replace(array[seq], result);
    }
  }
}

function div(string) {
  let array = string
    .split("+")
    .join(",")
    .split("-")
    .join(",")
    .split("*")
    .join(",")
    .split(",");
  let divArr;
  for (let seq = 0; seq < array.length; seq++) {
    if (array[seq].includes("/")) {
      divArr = array[seq].split("/");
      result = parseFloat(divArr[0]); //나누기할 때 0값은 undefined
      for (let divSeq = 1; divSeq < divArr.length; divSeq++) {
        result = result / parseFloat(divArr[divSeq]);
      }
      string = string.replace(array[seq], result.toFixed(1));
    }
  }
  return string; //소수점x 반올림해서 계산
}

function mul(string) {
  let array = string
    .split("+")
    .join(",")
    .split("-")
    .join(",")
    .split("/")
    .join(",")
    .split(",");
  let mulArray;
  for (let seq = 0; seq < array.length; seq++) {
    if (array[seq].includes("*")) {
      mulArray = array[seq].split("*");
      result = 1; //곱하기할 때 0값은 undefined
      mulArray.forEach(function (ele) {
        result *= parseFloat(ele);
        console.log(result);
        return result;
      });
      string = string.replace(array[seq], result);
    }
  }
  return string;
}

init();
