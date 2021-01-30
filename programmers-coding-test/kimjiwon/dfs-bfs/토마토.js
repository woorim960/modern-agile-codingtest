const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const [m, n] = input[0].split(" ").map(Number);

let tomatos = [];
let queue = [];
let zero = 0;
let cnt = 0;
minimumDate();

function minimumDate() {
  for (let i = 1; i < n + 1; i++) {
    tomatos.push(input[i].split(" ").map(Number));
    for (let j = 0; j < tomatos[i - 1].length; j++) {
      if (tomatos[i - 1][j] === 1) queue.push([i - 1, j]);
      if (tomatos[i - 1][j] === 0) zero++;
    }
  }

  bfs(queue);
  zero !== 0 ? console.log(-1) : console.log(cnt - 2);
}

function bfs(queue) {
  let queueCursor = 0;
  while (queue.length > queueCursor) {
    const [x, y] = queue[queueCursor++];
    cnt = tomatos[x][y] + 1;
    for (let i in dx) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (check(nx, ny) && tomatos[nx][ny] === 0) {
        zero--;
        queue.push([nx, ny]);
        tomatos[nx][ny] = cnt;
      }
    }
  }
}

function check(x, y) {
  if (x > -1 && y > -1 && x < n && y < m) return true;
  return false;
}
