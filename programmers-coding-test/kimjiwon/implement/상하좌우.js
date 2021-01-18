const rl = require("readline-sync");
const boxsize = +rl.question("크기는 어떻게 될까요?");
const move = rl
  .question("움직인 방향은?(R: 오른쪽, L: 왼쪽, U:위, D: 아래)")
  .split(" ");

const dy = [0, 0, -1, 1];
const dx = [1, -1, 0, 0];
const direction = ['R', 'L', 'U', 'D'];

let x, y, nx, ny;
x = y = 1;
nx = ny = 0;

for (let i of move) {
  let position = direction.indexOf(i);

  nx = x + dx[position];
  ny = y + dy[position];
  
  if (!nx || !ny || nx > boxsize || ny > boxsize) {
    continue;
  }

  x = nx;
  y = ny;
}

console.log(`${x} ${y}`);
