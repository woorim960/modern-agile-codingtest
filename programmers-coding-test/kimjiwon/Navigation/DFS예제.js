const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = {};
const result = [];

function dfs(graph, x, visited) {
  visited[x] = true;
  result.push(x);
  for (let y of graph[x]) {
    if (!visited[y]) {
      dfs(graph, y, visited);
    }
  }
}

dfs(graph, 1, visited);
console.log(result.join(","));
