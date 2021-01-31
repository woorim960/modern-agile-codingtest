const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(" ").map(val => parseInt(val));

const graph = [];

for (let i = 1; i <= N; i++) {
  const vector = input[i].split("").map(val => parseInt(val)); 
  graph.push(vector);
}

const [dx, dy] = [
  [-1, +1, 0, 0],
  [0, 0, -1, +1]
]
function bfs(x, y) {
  const queue = [[x, y]];

  while (queue.length !== 0) {
    [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
           if (nx <= -1 || nx >= N || ny <= -1 || ny >= M) continue;
      if (graph[nx][ny] === 0) continue;
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return graph[N - 1][M - 1];
}

const result = bfs(0, 0);
console.log(result);
