`use strict`

const rl = require("readline-sync");

const N = rl.question("공간의 크기를 입력해주세요.\n>> ");
let [ x, y ] = [ 1, 1 ]; 
const PLANS = rl.question("이동할 방향을 입력해주세요.\n>> ").toUpperCase().split('');

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const move_types = ['L', 'R', 'U', 'D'];

let [ nx, ny ] = [ 0 , 0 ];

for (let plan of PLANS) {
  for (let i = 0; i < move_types.length; i++) {
    if (plan === move_types[i]) {
      nx = x + dx[i];
      ny = y + dy[i];
    }
  }
  if (nx < 1 || ny < 1 || nx > N || ny > N) {
    continue;
  }
  [ x, y ] = [ nx, ny ]; 
}

console.log(x, y);