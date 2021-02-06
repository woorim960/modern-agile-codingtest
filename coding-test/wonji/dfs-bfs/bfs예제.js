const graph = [
    [1],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
  ];
  
  const queue = [];
  
  const visited = [];
  
  for (let x = 0; x < graph.length; x++) {
    for (let y = 0; y < graph[x].length; y++) {
      if (x === graph.length - 1) {
        visited.push(...queue);
        break;
      }
      if (visited.includes(graph[x][y])) {
        continue;
      }
      if (queue.includes(graph[x][y])) {
        visited.push(queue[0]);
        queue.shift();
        continue;
      }
      queue.push(graph[x][y]);
    }
  }
  
  console.log(visited);