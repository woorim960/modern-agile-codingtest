const readline = require("readline");

let input = [];
let tomatos = [];
let queue = [];
let result = [];
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line.trim())).on("close", () => {
  const [m, n] = input[0].split(" ").map(Number);
  input.splice(0, 1);
  for (let i = 0; i < n; i++) {
    tomatos.push(input[i].split(" ").map(Number));
    for (let j = 0; j < tomatos[i].length; j++) {
      if (tomatos[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  bfs(queue, m, n);
  for (let i = 0; i < n; i++) {
    if (tomatos[i].includes(0)) {
      console.log(-1);
      return;
    }
  }
  console.log(Math.max.apply(null, result) - 1);
});

const bfs = (queue, m, n) => {
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i in dx) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx > n - 1 || ny < 0 || ny > m - 1) continue;
      if (tomatos[nx][ny] === 0) {
        queue.push([nx, ny]);
        tomatos[nx][ny] = tomatos[x][y] + 1;
        if (!result.includes(tomatos[nx][ny])) {
          result.push(tomatos[nx][ny]);
        }
      }
    }
  }
};
