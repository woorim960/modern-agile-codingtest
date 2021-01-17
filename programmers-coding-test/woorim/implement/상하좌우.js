"use strict";
const rl = require("readline-sync");

const N = parseInt(rl.question("공간의 크기(조건: 숫자)\n>> "));
const moves = rl.question("이동 좌표(조건: 공백을 기준으로 알파벳)\n>> ").toUpperCase().split(" ");

const [RL, UD] = [["R", "L"], ["U", "D"]];
const [dx, dy] = [
  { "R": 1, "L": -1 }, 
  { "U": -1, "D": 1 }
];

function 상하좌우(N, moves) {
  let [x, y, nx, ny] = [1, 1, 0, 0];
  for (let mv of moves) {
      nx = RL.includes(mv) ? x + dx[mv] : x;
      ny = UD.includes(mv) ? y + dy[mv] : y;
      x = nx < 1 || nx > N ? x : nx;
      y = ny < 1 || ny > N ? y : ny;
  }
  
  return [x, y];
}

console.log(상하좌우(N, moves));

