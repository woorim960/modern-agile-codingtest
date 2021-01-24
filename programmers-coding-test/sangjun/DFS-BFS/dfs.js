const graph = [[], [8, 3, 2], [1, 7], [5, 4, 1], [5, 3], [4, 3], [7], [8, 6 ,2], [7, 1]];

const dfs = (graph, startNode) => {
    let visited = [];
    let visitedStack = [];
  
    visited.push(startNode);
  
    while (visited.length !== 0) {
      const node = visited.pop();
      if (!visitedStack.includes(node)) {
        visitedStack.push(node);
        visited = [...visited, ...graph[node]];
      }
      console.log(graph[node])
    }
    return visitedStack;
};
  
dfs(graph, "1");