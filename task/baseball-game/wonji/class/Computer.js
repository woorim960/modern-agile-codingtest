export default class Computer {
  static random() {
    const computerPick = [];
    computerPick[0] = Math.floor(Math.random() * 9 + 1) + "";
    do {
      computerPick[1] = Math.floor(Math.random() * 9 + 1) + "";
    } while (computerPick[0] === computerPick[1]);

    do {
      computerPick[2] = Math.floor(Math.random() * 9 + 1) + "";
    } while (
      computerPick[2] === computerPick[0] ||
      computerPick[1] === computerPick[2]
    );

    return computerPick;
  }
}
