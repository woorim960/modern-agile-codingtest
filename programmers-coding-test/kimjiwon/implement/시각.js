const rl = require("readline-sync");

const H = +rl.question("몇 시까지 할껀데 딱 말혀");
let count = 0;

for (let h = 0; h < H + 1; h++) {
  for (let m = 0; m < 60; m++) {
    for (let s = 0; s < 60; s++) {
      let time = `${h}:${m}:${s}`;
      if (time.match(/[3]/g)) {
        count++;
      }
    }
  }
}
console.log(count);
