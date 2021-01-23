const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
  ]
const visited = new Array(9).fill(false);
  
function dfs(v) {
  visited[v] = true;
  process.stdout.write(`${v} `);
  
  for (let child of graph[v]) {
    if (!visited[child]) dfs(child);
  }
}

dfs(1);
