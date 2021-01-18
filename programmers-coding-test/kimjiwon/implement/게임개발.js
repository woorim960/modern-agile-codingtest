const rl = require("readline-sync");
const map = [];
const mapSize = rl.question("맵을 생성해주세요(세로 가로)").split(" ");
const avatar = rl
  .question("캐릭터는어디(좌표2개와 위치 0:북,1:동,2:남,3:서) 적어주세요")
  .split(" ");
for (let i = 0; i < parseInt(mapSize[1]); i++) {
  let settingMap = rl
    .question("맵의 육지(0)와 바다(1)로 꾸며주세요~")
    .split(" ");
  let changeNumber = settingMap.map((el) => parseInt(el));
  map.push(changeNumber);
}
//데이터 받아오는 것들
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let x = +avatar[0];
let y = +avatar[1];
let direction = +avatar[2];
let turnTime, changeX, changeY;
let count = 1;
turnTime = changeX = changeY = 0;

map[x][y] = 2;

while (true) {
  direction = (direction - 1) === -1 ? 3 : direction—;
  changeX = x + dx[direction];
  changeY = y + dy[direction];
  if (turnTime === 4) {
    changeX = x - dx[direction];
    changeY = y - dy[direction];
  }

  if (map[changeX][changeY] === 0) {
    map[changeX][changeY] = 2;
    x = changeX;
    y = changeY;
    count++;
    turnTime = 0;
    continue;
  } else {
    turnTime++;
  }
  if (turnTime === 5) break;
}
console.log(map);
console.log(count);
// function north(row, column, direction) {
//   row--;
//   if (!map[row][column]) {
//     row++;
//     map[row][column] = 2;
//     direction++;
//     return west(row, column, direction);
//   } else {
//     map[row][column] = 2;
//     count++;
//     direction = 0;
//   }
// }
// function south(row, column, direction) {
//   row++;
//   if (!map[row][column]) {
//     row--;
//     map[row][column] = 2;
//     direction++;
//     return east(row, column, direction);
//   } else {
//     map[row][column] = 2;
//     count++;
//     direction = 0;
//   }
// }
// function east(row, column, direction) {
//   column++;
//   if (!map[row][column]) {
//     column--;
//     map[row][column] = 2;
//     direction++;
//     return north(row, column, direction);
//   } else {
//     map[row][column] = 2;
//     count++;
//     direction = 0;
//   }
// }
// function west(row, column, direction) {
//   column--;
//   if (!map[row][column]) {
//     column++;
//     map[row][column] = 2;
//     direction++;
//     return south(row, column, direction);
//   } else {
//     map[row][column] = 2;
//     count++;
//     direction = 0;
//   }
// }
