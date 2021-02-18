const rl = require("readline-sync");

const N = rl.question("n*n 맵생성 :\n>> ").split(" ");
const characterLocation = rl.question("캐릭터위치 바라보는방향입력 (ex 1 1 0(북)) :\n>> ").split(" ");

const map = [];

for (let i = 0; i < N[0]; i++) {
    const vector = rl.question("맵의 크기의 맞게 육지0 바다1 입력 :\n>> ").split(" ") .map((el) => parseInt(el));
    map.push(vector);
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let x = +characterLocation[0];
let y = +characterLocation[1];
let direction = +characterLocation[2];
let turnTime, nx, ny;
turnTime, nx, ny = 0;
let count = 1;

map[x][y] = 1;

function turnLeft() {
    direction = direction - 1 === -1 ? 3 : direction--;


while (true) {
    turnLeft();
    nx = x + dx[direction];
    ny = x + dy[direction];

    if (turnTime === 4) {
        nx = x - dx[direction];
        ny = y - dy[direction];
    }

    if (map[nx][ny] === 0) {
        map[nx][ny] = 1;
       [x, y] = [nx, ny];
        count++;
        turnTime = 0;
        console.log(count);
        continue;
    }
    turnTime++;

    if (turnTime > 4) break;
}

console.log(count);
