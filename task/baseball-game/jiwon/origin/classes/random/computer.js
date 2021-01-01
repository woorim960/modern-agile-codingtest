export default class Computer {
  static getRandomNumbers() {
    const computerNumbers = new Set([]);
    while (computerNumbers.size != 3) {
      computerNumbers.add(Math.floor(Math.random() * 9 + 1) + "");
    }
    return Array.from(computerNumbers).join("");
  }
}
