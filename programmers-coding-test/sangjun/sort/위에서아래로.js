const rl = require("readline-sync");
const N = rl.question("입력할 숫자 갯수 :\n>> ").split(" ");

const graph = [];
for (let i = 0; i < N; i++) {
    const vector = rl.question("정렬할 숫자 입력 :\n>> ").split(" ") .map((el) => parseInt(el));
    graph.push(vector);
}

graph.sort((a, b) =>  b - a);