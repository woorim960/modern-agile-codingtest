const rl = require("readline-sync");

const N = rl.question("N*N 맵생성 :\n>> ").split(" ");

const map = [];
for (let i = 0; i < N; i++) {
const vector = rl.question("얼음 배치 :\n>> ").split(" ") .map((el) => parseInt(el));
    map.push(vector);
}

let cnt = 0;
// 상,하,좌,우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

for (let i = 0; i < N; i++) {
    map.push(i);
}

function dfs(x, y) {
    if(x >= 0 && N > y >= 0 && map[x][y] === 0) {
    map[x][y] = 1
    dfs(x + 1, y)
    dfs(x - 1 ,y)
    dfs(x, y + 1)
    dfs(x, y - 1)
    return true;
    }
    return false;
}

for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
        if (dfs(j, k)) {
            cnt++;
        }
    }
}

console.log(cnt);