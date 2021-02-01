const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N] = input[0].split(" ").map(val => parseInt(val));

const graph = [];

for (let i = 1; i <= N; i++) {
  const vector = input[i].split("").map(val => parseInt(val));
  graph.push(vector);
}

function dfs(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= N) return false;
  if (graph[x][y] === 0) return false;
  if (graph[x][y] === 1) {
    graph[x][y] = 0;
    aptCnt++;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

const aptCnts = [];
let [mapCnt, aptCnt] = [0, 0];
for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    aptCnt = 0;
    if (dfs(x, y)) {
      mapCnt++;
      aptCnts.push(aptCnt);
    }
  }
}

aptCnts.sort((a, b) => a - b);
[mapCnt, ...aptCnts].forEach((cnt) => console.log(`${cnt} `));
