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
  
function bfs(start) {
  const queue = [start];
  visited[start] = true;
  
  while (queue.length !== 0) {
    const v = queue.shift();
    process.stdout.write(`${v} `);
    
    for (let child of graph[v]) {
      if (!visited[child]) {
        queue.push(child);
        visited[child] = true;
      }
    }
  }
}

bfs(1);
