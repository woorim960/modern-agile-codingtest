const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [T] = input[0].split(" ").map(val => parseInt(val));
let M, N, K;
input = input.slice(1);

function solution() {
  const whiteEarthworms = [];

  for (let i = 0; i < T; i++) {
    makeGraph();

    const whiteEarthworm = searchWhiteEarthworm();
    whiteEarthworms.push(whiteEarthworm);

    input = input.slice(K + 1);
  }
  return whiteEarthworms;
}

let graph;
function makeGraph() {
  [M, N, K] = input[0].split(" ").map(val => parseInt(val));
  graph = Array.from(new Array(N), () => new Array(M).fill(0));
  for (let i = 1; i <= K; i++) {
    const [y, x] = input[i].split(" ").map(val => parseInt(val));
    graph[x][y] = 1;
  }
}

function searchWhiteEarthworm() {
  let whiteEarthworm = 0;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (dfs(x, y)) {
        whiteEarthworm++;
      }
    }
  }
  return whiteEarthworm;
}

function dfs(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= M) return false;
  if (graph[x][y] === 0) return false;
  if (graph[x][y] === 1) {
    graph[x][y] = 0;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

const whiteEarthworms = solution();
whiteEarthworms.forEach((whiteEarthworm) => console.log(whiteEarthworm));
