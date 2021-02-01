const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];
const [m, n, h] = input[0].split(" ").map(Number);
input.splice(0, 1);

let totalBox = [];
let tomatos = [];
let queue = [];
let zero = 0;
let cnt = 0;
minimumDate();

function minimumDate() {
  for (let box = 0; box < h; box++) {
    for (let i = 0; i < n; i++) {
      tomatos.push(input[i].split(" ").map(Number));
      for (let j = 0; j < m; j++) {
        if (tomatos[i][j] === 1) queue.push([box, i, j]);
        if (tomatos[i][j] === 0) zero++;
      }
    }
    input.splice(0, n);
    totalBox.push(tomatos);
    tomatos = [];
  }
  bfs(queue);
  zero !== 0 ? console.log(-1) : console.log(cnt - 2);
}

function bfs(queue) {
  let queueCursor = 0;
  while (queue.length > queueCursor) {
    const [x, y, z] = queue[queueCursor++];
    cnt = totalBox[x][y][z] + 1;
    for (let i in dx) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      let nz = z + dz[i];
      if (check(nx, ny, nz) && totalBox[nx][ny][nz] === 0) {
        zero--;
        queue.push([nx, ny, nz]);
        totalBox[nx][ny][nz] = cnt;
      }
    }
  }
}

function check(x, y, z) {
  if (x > -1 && z > -1 && y > -1 && x < h && z < m && y < n) return true;
  return false;
}
