export default class Validator {
  static isThreeNumber(inputValue) {
    if (inputValue.length === 3) {
      return true;
    }
    return false;
  }
}
