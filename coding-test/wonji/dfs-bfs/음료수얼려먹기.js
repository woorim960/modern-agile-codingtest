const rl = require("readline-sync");
const n = parseInt(rl.question("세로 N입력.\n>>"));
const m = parseInt(rl.question("가로 M입력.\n>>"));

const graph = [];

for (let i = 0; i < n; i++){
  let ice = rl.question("얼음틀 입력.\n").split("").map(Number);
  graph.push(ice);
}

// console.log(graph);

function dfs(x, y){
  if( x <= - 1 || x >= n || y <= -1 || y >= m ){
    return false;
  }
  if( graph[x][y] === 0 ){
    graph[x][y] = 2;
    dfs(x -1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

let result = 0;

for (let a = 0; a < n; a++){
  for (let b = 0; b < m; b++){
    if (dfs(a,b) === true){
      result += 1;
    }
  }
}

// console.log(result);
// console.log(graph);