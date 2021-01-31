const graphs = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6 ,8], [1, 7]];

const bfs = (graph, startNode) => {
    let visited = [];
    let visitedQueue = [];
    
    visitedQueue.push(startNode);
    while (visitedQueue.length !== 0) {
      const node = visitedQueue.shift();
      if (!visited.includes(node)) {
        visited.push(node); 
        visitedQueue = [...visitedQueue, ...graph[node]];
      }
    }
    return visited;
};

bfs(graphs, "1");

