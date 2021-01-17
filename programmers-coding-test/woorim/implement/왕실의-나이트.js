"use strict";
const rl = require("readline-sync");

const place = rl.question("말의 위치\n>> ");

const column = { "a": 0, "b": 1, "c":  2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7 };

const steps = [
    [-2, -1], [-2, +1], [+2, -1], [+2, +1], [-1, -2], [+1, -2], [-1, +2], [+1, +2]
  ];
  
function 왕실의_나이트(place) {
  const [col, row] = [column[place[0]], place[1] - 1];
  
  let cnt = 0;
  for (let step of steps) {
    const nx = col + step[0];
    const ny = row + step[1];
    if (nx >= 0 && nx <= 7 && ny >= 0 && ny <= 7) cnt++;
  }
  return cnt;
}

console.log(왕실의_나이트(place));
