const readline = require("readline");

let arr = [];
let dfsVisited = [];
let bfsVisited = [];
let dfsResult = [];
let bfsResult = [];
let input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line.trim())).on("close", () => {
  const [n, m, v] = input[0].split(" ").map(Number);
  input = input.slice(1);
  arr = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let i of input) {
    let [x, y] = i.split(" ").map(Number);
    arr[x][y] = arr[y][x] = 1;
  }
  dfsVisited = new Array(n + 1).fill(false);
  bfsVisited = new Array(n + 1).fill(false);

  bfs(v);
  dfs(v);
  console.log(dfsResult.join(" "));
  console.log(bfsResult.join(" "));
});

function dfs(v) {
  dfsVisited[v] = true;
  dfsResult.push(v);
  for (let i in arr) {
    if (arr[v][i] === 1 && !dfsVisited[i]) {
      dfs(i);
    }
  }
}

function bfs(v) {
  const queue = [];
  queue.push(v);
  bfsResult.push(v);
  while (queue.length) {
    let delqueue = queue.shift();
    bfsVisited[delqueue] = true;
    for (let i in arr) {
      if (arr[delqueue][i] === 1 && !bfsVisited[i]) {
        bfsVisited[i] = true;
        bfsResult.push(i);
        queue.push(i);
      }
    }
  }
}
