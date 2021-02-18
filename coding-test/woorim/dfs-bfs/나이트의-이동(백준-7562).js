const { BADFLAGS } = require("dns");
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [T] = input[0].split(" ").map((val) => parseInt(val));
let graph;
let l;
let x, y, tx, ty;

input = input.slice(1);

function solution() {
  const minDistances = [];
  for (let i = 0; i < T; i++) {
    initTestCase();
    makeGraph();
    graph[x][y] = 1;

    const minDistance = bfs(x, y);
    minDistances.push(minDistance);
  }
  return minDistances;
}

function initTestCase() {
  [l] = input[0].split(" ").map((val) => parseInt(val));
  [x, y] = input[1].split(" ").map((val) => parseInt(val));
  [tx, ty] = input[2].split(" ").map((val) => parseInt(val));
  input = input.slice(3);
}

function makeGraph() {
  graph = Array.from(new Array(l), () => new Array(l).fill(0));
}

const [dx, dy] = [
  [-2, -2, +2, +2, -1, +1, -1, +1],
  [-1, +1, -1, +1, -2, -2, +2, +2],
];

function bfs(x, y) {
  const queue = [[x, y]];

  while (queue.length !== 0) {
    [x, y] = queue.shift();

    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx <= -1 || nx >= l || ny <= -1 || ny >= l) continue;
      if (graph[nx][ny] === 1) continue;
      if (graph[nx][ny] === 0) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);

        if (nx === tx && ny === ty) return graph[tx][ty] - 1;
      }
    }
  }
  return graph[tx][ty] - 1;
}

const result = solution();
result.forEach((el) => console.log(el));

