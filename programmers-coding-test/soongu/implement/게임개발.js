`use strict`

const rl = require("readline-sync");
let [ n, m ] = rl.question("공간의 크기를 입력해주세요.\n>> ").split(' ').map((val) => parseInt(val));
const d = Array.from(Array(n), () => Array(m).fill(0))

let [ x, y , direction ] = rl.question("현재 캐릭터의 x좌표, y좌표, 방향을 입력해주세요.\n>> ").split(' ').map((val) => parseInt(val));
d[x][y] = 1;

array = [];
for (let i = 0; i < n; i++) {
  array.push(rl.question("육지 바다 구분을 해주세요.\n>> ").split(' ').map((val) => parseInt(val)));
}

let dx = [ -1, 0, 1, 0 ]; 
let dy = [ 0, 1, 0, -1 ]; 

function turn_left() {
  direction = direction - 1 === -1 ? 3 : direction--;
}

let count = 1;
let turn_time = 0;

while(true) {
  turn_left();
  let nx = x + dx[direction];
  let ny = y + dy[direction];

  if (d[nx][ny] === 0 && array[nx][ny] === 0) {
    d[nx][ny] = 1;
    x = nx;
    y = ny;
    count++;
    turn_time = 0;
    continue;
  }
  turn_time++;
  if (turn_time === 4) {
    nx = x - dx[direction];
    ny = y - dy[direction];

    if (array[nx][ny] === 0) {
      x = nx;
      y = ny;
    } else {
      break;
    }
    turn_time = 0;
  }
}

console.log(count);
