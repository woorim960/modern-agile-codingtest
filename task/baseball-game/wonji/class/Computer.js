export default class Computer {
    static getRandom(computerPick) {
      const computerPick = new Set([]);

      while (computerPick.size != 3) {
        computerPick.add(Math.floor.apply(Math.random() * 9 + 1) + "");
      }
      return Array.from(computerPick).join("");
  }
}

