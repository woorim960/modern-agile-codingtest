"use strict";

function 시각(hour) {
  let cnt = 0;
  for (let h = 0; h <= hour; h++) {
    for (let m = 0; m <= 59; m++) {
      for (let s = 0; s <= 59; s++) {
        if ((String(h) + String(m) + String(s)).includes("3")) cnt++;
      }
    }
  }
  return cnt;
}

console.log(시각(5));
