const readline = require("readline");

let input = [];
let tomatos = [];
let queue = [];
let zero = 0;
let cnt = 0;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line.trim())).on("close", () => {
  const [m, n] = input[0].split(" ").map(Number);
  input = input.slice(1);
  for (let i = 0; i < n; i++) {
    tomatos.push(input[i].split(" ").map(Number));
    for (let j = 0; j < tomatos[i].length; j++) {
      if (tomatos[i][j] === 1) queue.push([i, j]);
      if (tomatos[i][j] === 0) zero++;
    }
  }

  bfs(queue, m, n);
  zero !== 0 ? console.log(-1) : console.log(cnt - 2);
});

const bfs = (queue, m, n) => {
  while (queue.length) {
    const [x, y] = queue.shift();
    cnt = tomatos[x][y] + 1;
    for (let i in dx) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx > n - 1 || ny < 0 || ny > m - 1) continue;
      if (tomatos[nx][ny] === 0) {
        zero--;
        queue.push([nx, ny]);
        tomatos[nx][ny] = cnt;
      }
    }
  }
};
