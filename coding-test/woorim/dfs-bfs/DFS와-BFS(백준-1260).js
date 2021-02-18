const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M, V] = input[0].split(" ").map(val => parseInt(val));

const graph = Array.from(new Array(N + 1), () => new Array());
let visited;

for (let i = 1; i <= M; i++) {
  const [node1, node2] = input[i].split(" ").map(val => parseInt(val));
  graph[node1].push(node2);
  graph[node2].push(node1);
}

graph.map((v) => v.sort((a, b) => a - b));

const visitingNodeByDfs = [];
function dfs(v) {
  visited[v] = true;
  visitingNodeByDfs.push(v);
  for (let child of graph[v]) {
    if (!visited[child]) {
      dfs(child);
    }
  }
}

const visitingNodeByBfs = [];
function bfs(start) {
  const queue = [start];
  visited[start] = true;

  while (queue.length !== 0) {
    const v = queue.shift();
    visitingNodeByBfs.push(v);

    for (let child of graph[v]) {
      if (!visited[child]) {
        queue.push(child);
        visited[child] = true;
      }
    }
  }
}

visited = new Array(N + 1).fill(false);
dfs(V);

visited = new Array(N + 1).fill(false);
bfs(V);

visitingNodeByDfs.forEach(v => process.stdout.write(`${v} `));
console.log();
visitingNodeByBfs.forEach(v => process.stdout.write(`${v} `));
