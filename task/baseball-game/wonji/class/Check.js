export default class Check {
  static error(inputValue) {
    let nonOverlap = new Set(inputValue);
    if (inputValue.split("").length !== 3) {
      return true;
    }
    if (isNaN(parseInt(inputValue))) {
      return true;
    }
    if (inputValue.split("").length !== nonOverlap.size) {
      return true;
    }
  }
}
