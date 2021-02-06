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
//방문한 숫자 => 큐 배열
const queue = [];
//큐에서 빠져나온 숫자 배열 1은 기본값..
const visited = [1];
//이거 제외

//모두 방문하면 큐 배열로 가고 그 큐 배열에서 숫자배열로
//큐 배열 빠지면 끝

for (let x = 1; x < graph.length; x++) {
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
console.log(visited.join(","));
