"use strict";
const rl = require("readline-sync");

const [N, M] = rl.question("지도의 크기\n>> ").split(" ");
let [x, y, d] = rl.question("캐릭터의 좌표와 바라보는 방향\n>> ").split(" ").map((val) => parseInt(val));
const map = [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]];
// for (let n = 0; n < N; n++) {
//   const vector = rl.question(">> ").split(" ");
//   map.push(vector);
// }

const dx = [0, -1, 0, +1];
const dy = [-1, 0, +1, 0];


// 무시
let cnt = 0;
let moveCnt = 2;
console.log(map, cnt); // 이동 위치 확인용
map[x][y] = moveCnt;   // 처음 캐릭터 위치 표시
cnt++;
moveCnt++;
console.log(map, cnt); // 이동 위치 확인용

function 게임_개발(x, y, d) {
  let isPlay = true;
  while (isPlay) {
    isPlay = playGame();
  }
  return cnt;
}

console.log(게임_개발(x, y, d));

function playGame() {
  if (isGoToLeft()) {
    goToLeft();
    cnt++;
    moveCnt++;
    console.log(map, cnt); // 이동 위치 확인용
    return true;
  }
  if (isNotGoAround()) {
    if (isGoToBack()) {
      goToBack();
      return true;
    }
    return false;
  }
  turnToLeft();
  return true;
}

function isGoToLeft() {
  return map[x + dx[d]][y + dy[d]] === 0;
}

function goToLeft() {
  x += dx[d];
  y += dy[d];
  map[x][y] = moveCnt;
}

function isNotGoAround() {
  let oneCnt = 0;
  for (let d = 0; d <= 3; d++) {
    if (map[x + dx[d]][y + dy[d]] !== 0) oneCnt++;
  }
  return oneCnt >= 4;
}

function isGoToBack() {
  return map[x + dx[d]][y + dy[d]] !== 1;
}

function goToBack() {
  x += dx[d];
  y += dy[d];
}

function turnToLeft() {
  d = d - 1 == -1 ? 3 : d - 1;
}



/*
 * 콘솔 제거
 */


"use strict";
const rl = require("readline-sync");

const [N, M] = rl.question("지도의 크기\n>> ").split(" ");
let [x, y, d] = rl.question("캐릭터의 좌표와 바라보는 방향\n>> ").split(" ").map((val) => parseInt(val));
const map = [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]];
// for (let n = 0; n < N; n++) {
//   const vector = rl.question(">> ").split(" ");
//   map.push(vector);
// }

const dx = [0, -1, 0, +1];
const dy = [-1, 0, +1, 0];

let cnt = 0;
map[x][y] = 2;   // 처음 캐릭터 위치 표시
cnt++;

function 게임_개발(x, y, d) {
  let isPlay = true;
  while (isPlay) {
    isPlay = playGame();
  }
  return cnt;
}

console.log(게임_개발(x, y, d));

function playGame() {
  if (isGoToLeft()) {
    goToLeft();
    cnt++;
    return true;
  }
  if (isNotGoAround()) {
    if (isGoToBack()) {
      goToBack();
      return true;
    }
    return false;
  }
  turnToLeft();
  return true;
}

function isGoToLeft() {
  return map[x + dx[d]][y + dy[d]] === 0;
}

function goToLeft() {
  x += dx[d];
  y += dy[d];
  map[x][y] = 2;
}

function isNotGoAround() {
  let oneCnt = 0;
  for (let d = 0; d <= 3; d++) {
    if (map[x + dx[d]][y + dy[d]] !== 0) oneCnt++;
  }
  return oneCnt >= 4;
}

function isGoToBack() {
  return map[x + dx[d]][y + dy[d]] !== 1;
}

function goToBack() {
  x += dx[d];
  y += dy[d];
}

function turnToLeft() {
  d = d - 1 == -1 ? 3 : d - 1;
}
