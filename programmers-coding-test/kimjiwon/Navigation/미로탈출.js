const n = 5;
const m = 6;

const maze = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

//현재위치 1,1
//큐에 아래, 옆 1이면 저장
//아래부터 시작해서
//아래 위
const dx = [-1, 1, 0, 0];
//오른쪽 왼쪽
const dy = [0, 0, -1, 1];

const queue = [];

const visit = Array.from(new Array(n), () => new Array(m).fill(false));

visit[0][0] = true;
queue.push([0, 0]);

function escape(queue, visit, n, m) {
  while (queue.length) {
    const v = queue.shift();
    const [x, y] = v;
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx > -1 && nx < n && ny > -1 && ny < m) {
        if (visit[nx][ny] === false && maze[nx][ny] !== 0) {
          queue.push([nx, ny]);
          maze[nx][ny] = maze[x][y] + 1;
          visit[nx][ny] = true;
        }
      }
    }
  }
}
escape(queue, visit, n, m);

console.log(maze[n - 1][m - 1]);
