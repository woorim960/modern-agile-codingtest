const rl = require("readline-sync");

const N = parseInt(rl.question("n*n 행렬 숫자만 입력 :\n>> "));
const movePlan = rl.question("L ,R ,U, D 입력으로 이동 :\n>> ").toUpperCase().split(" ");

const moves = ['L', 'R', 'U', 'D'];
let [x, y] = [1, 1];

for (let i in moves) {
    if (movePlan[i] === moves[0]) {
        y = y - 1 === 0 ? 1 : y - 1;
    }
    if (movePlan[i] === moves[1]) {
        y + 1 === N + 1 ? y === 1 : y = y + 1;
    }
    if (movePlan[i] === moves[2]) {
        x - 1 === 0 ? x === 1 : x = x - 1;
    }
    if (movePlan[i] === moves[3]) {
        x + 1 === N + 1 ? x === 1 : x = x + 1;
    }
    console.log(`${x} ${y}`);

}
