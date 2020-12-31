export default class Computer {
  static getRandomNumbers() {
    // computerNumbers[0] = Math.floor(Math.random() * 9 + 1) + "";
    // do {
    //   computerNumbers[1] = Math.floor(Math.random() * 9 + 1) + "";
    // } while (computerNumbers[0] === computerNumbers[1]);

    // do {
    //   computerNumbers[2] = Math.floor(Math.random() * 9 + 1) + "";
    // } while (
    //   computerNumbers[2] === computerNumbers[0] ||
    //   computerNumbers[1] === computerNumbers[2]
    // );
    const computerNumbers = new Set([]);
    while (computerNumbers.size != 3) {
      computerNumbers.add(Math.floor(Math.random() * 9 + 1) + "");
    }

    return Array.from(computerNumbers).join("");
  }
}
