import { inputTxt } from "../DOM.js";

export default class Error {
  static throw(inputValue) {
    if (isNaN(inputValue)) {
      return this.notNumber();
    }
    this.overlapNumber(inputValue);
  }

  static notNumber() {
    alert("숫자가 아닙니다.");
    inputTxt.value = "";
  }

  static overThreeNumber() {
    alert("세자리 수를 입력해주세요");
    inputTxt.value = "";
  }

  static overlapNumber(inputValue) {
    let deduplication = new Set(inputValue);
    if (inputValue.split("").length !== deduplication.size) {
      alert("숫자가 중복되었습니다.");
      inputTxt.value = "";
    }
  }
}
