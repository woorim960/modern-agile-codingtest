export default class ErrorValidator {

  static isThreeNumber(inputValue) {
    if (inputValue.length === 3) {
      return true;
    }
    return false;
  }

  static isoverlapNumber(inputValue) {
    let deduplication = new Set(inputValue);
    if (inputValue.split("").length !== deduplication.size) {
      return true;
    }
    return false;
  }

  static isNotNumber(inputValue) {
    if (isNaN(inputValue)) {
      return true;
    }
    return false;
  }
}
