`use strict`

const N = 6;
let count = 0;
let str;

for (let i = 0; i < N + 1; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k <60; k++) {
        str = `${i}${j}${k}`;
        if (str.includes(3)) {
            count++;
        }
      }
    }
  }

console.log(count);