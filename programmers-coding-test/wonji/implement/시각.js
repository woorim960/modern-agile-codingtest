const rl = require("readline-sync");
const h = parseInt(rl.question("N값 입력(시간).\n>>"));
console.log(h);

let count = 0;

for (let i = 0; i < h + 1; i ++){
  for (let j = 0; j < 60; j ++){
    for (let k = 0; k < 60; k ++){
      let hms = `${i}+${j}+${k}`;
      if (hms.match(3)){
        count += 1;
      }
    }
  }
}

console.log(count);

