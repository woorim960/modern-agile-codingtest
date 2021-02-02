const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N] = input[0].split(" ").map(val => parseInt(val));
const [M] = input[1].split(" ").map(val => parseInt(val));

const graph = Array.from(new Array(N + 1), () => new Array());
let visited;

for (let i = 2; i <= M + 1; i++) {
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

visited = new Array(N + 1).fill(false);
dfs(1);
console.log(visitingNodeByDfs.length - 1)
