const rl = require("readline-sync");

const [N, M] = rl.question("지도의 크기\n>> ").split(" ");
let [x, y, d] = rl.question("캐릭터의 좌표와 바라보는 방향\n>> ").split(" ").map((val) => parseInt(val));
const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 1], // map[x - 1][y]
  [1, 0, 0, 1],
  [1, 1, 1, 1]
];

let moveCnt = 2;
map[x][y] = moveCnt;
moveCnt++;
function solution() {
  let cnt = 1;
  while (true) {
    if (isGoToLeft()) {
      goToLeft();
      cnt++;
      moveCnt++;
      console.log(map);
      continue;
    }
    if (isNotGoAround()) {
      if (isGoToBack()) {
        goToBack();
      }
      return cnt;
    }
    turnLeft();
  }
}

console.log(solution());

function isGoToLeft() {
  if (d === 0) return map[x][y - 1] === 0;
  if (d === 1) return map[x - 1][y] === 0;
  if (d === 2) return map[x][y + 1] === 0;
  if (d === 3) return map[x + 1][y] === 0;
}

function goToLeft() {
  if (d === 0) {
    y -= 1;
    map[x][y] = moveCnt;
  } else if (d === 1) {
    x -= 1;
    map[x][y] = moveCnt;
  } else if (d === 2) {
    y += 1;
    map[x][y] = moveCnt;
  } else if (d === 3) {
    x += 1;
    map[x][y] = moveCnt;
  }
}

function isNotGoAround() {
  let oneCnt = 0;
  if (map[x][y - 1] !== 0) oneCnt++;
  if (map[x - 1][y] !== 0) oneCnt++;
  if (map[x][y + 1] !== 0) oneCnt++;
  if (map[x + 1][y] !== 0) oneCnt++;
  return oneCnt == 4;
}

function isGoToBack() {
  if (d === 0) return map[x + 1][y] !== 1;
  if (d === 1) return map[x][y - 1] !== 1;
  if (d === 2) return map[x - 1][y] !== 1;
  if (d === 3) return map[x][y + 1] !== 1;
}

function goToBack() {
  if (d === 0) x += 1;
  else if (d === 1) y -= 1;
  else if (d === 2) x -= 1;
  else if (d === 3) y += 1;
}

function turnLeft() {
  d = d - 1 == -1 ? 3 : d - 1;
}
