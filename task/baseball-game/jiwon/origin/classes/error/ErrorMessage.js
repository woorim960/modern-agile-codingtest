import { inputTxt, result } from "../DOM.js";

export default class ErrorMessage {

  static notNumber() {
    alert("숫자가 아닙니다.");
    inputTxt.value = "";
    result.innerHTML = "<img src = '../image/황당.jpg'>";
  }

  static overThreeNumber() {
    alert("세자리 수를 입력해주세요");
    inputTxt.value = "";
    result.innerHTML = "<img src = '../image/황당.jpg'>";
  }

  static overlapNumber() {
      alert("숫자가 중복되었습니다.");
      inputTxt.value = "";
      result.innerHTML = "<img src = '../image/황당.jpg'>";
  }
}
