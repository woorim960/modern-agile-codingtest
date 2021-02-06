const rl = require("readline-sync");

const [n, m] = rl.question(">> ").split(" ");
const [dx, dy] = [
    [-1, +1, 0, 0],
    [0, 0, -1, +1]
  ];
  
let maze = [
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0 ,0, 1, 0],
    [1, 1, 1, 1]
  ];
  
function 미로탈출(x, y) {
  const queue = [[x, y]];
  
  while (queue.length !== 0) {
    [x, y] = queue.shift();
    
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      
      if (nx <= -1 || nx >= n || ny <= -1 || ny >= m)
        continue;
      if (maze[nx][ny] === 0 )
        continue;
      if (maze[nx][ny] === 1) {
        maze[nx][ny] = maze[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return maze[n - 1][m - 1];
}

console.log(미로탈출(0, 0));
