const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

let map = [];
let destination = [];
let result = 0;
let size = 0;
const moves = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
];
chess();

function chess() {
  test = parseInt(input.splice(0, 1));
  for (i = 0; i < test; i++) {
    let cnt = 0;
    size = parseInt(input[i * 3]);
    current = input[i * 3 + 1].split(" ").map(Number);
    destination = input[i * 3 + 2].split(" ").map(Number);
    let queue = [];
    map = Array.from(Array(size), () => Array(size).fill(0));
    map[current[0]][current[1]] = 1;
    queue.push([current[0], current[1]]);
    bfs(queue, cnt);
    console.log(result - 1);
  }
}

function bfs(queue, cnt) {
  let visitnext = [];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x == destination[0] && y === destination[1]) {
      result = map[x][y];
      break;
    }

    for (let i of moves) {
      let nx = x + i[0];
      let ny = y + i[1];
      if (check(nx, ny) && map[nx][ny] === 0) {
        visitnext.push([nx, ny]);
        map[nx][ny] = map[x][y] + 1;
      }
    }
  }
  if (visitnext.length) bfs(visitnext, cnt);
}

function check(x, y) {
  if (x > -1 && y > -1 && x < size && y < size) return true;
  return false;
}
