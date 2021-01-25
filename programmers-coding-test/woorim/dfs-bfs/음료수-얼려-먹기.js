const rl = require("readline-sync");

const [n, m] = rl.question(">> ").split(" ");
const [dx, dy] = [
    [-1, +1, 0, 0],
    [0, 0, -1, +1]
  ];
  
let ices = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
  ];

function 음료수_얼려_먹기(x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  
  if (ices[x][y] === 0) {
    ices[x][y] = 1;
    
    for (let i = 0; i < 4; i++) {
      음료수_얼려_먹기(x + dx[i], y + dy[i]);
    }
    return true;
  }
  return false;
}

let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (음료수_얼려_먹기(i, j)) cnt++;
  }
}

console.log(cnt);
