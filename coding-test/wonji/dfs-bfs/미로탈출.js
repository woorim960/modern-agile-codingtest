const rl = require("readline-sync");
const n = parseInt(rl.question("세로 N입력.\n>>"));
const m = parseInt(rl.question("가로 M입력.\n>>"));

const graph = [];

for (let i = 0; i < n; i++){
  let map = rl.question("지도입력.\n").split("").map(Number);
  graph.push(map);
}

console.log(graph);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
  const queue = [[x, y]];

  while(queue.length !== 0) {
    [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = 0;
      let ny = 0;
      nx = x + dx[i];
      ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }
      if (graph[nx][ny] === 0) {
        continue;
      }
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return graph[n - 1][m - 1];
}

console.log(bfs(0, 0)); 