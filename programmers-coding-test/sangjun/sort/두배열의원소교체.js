const rl = require("readline-sync");
const change = rl.question("바꿀 횟수 :\n>> ").split(" ");
const N = rl.question("배열속 숫자 갯수 :\n>> ").split(" ");

const firstGraph = [];
const firsetVector = rl.question("첫번쨰 배열 숫자 입력 :\n>> ").split(" ").map((el) => parseInt(el));
firstGraph.push(firsetVector);

const secondGraph = [];
const secondVector = rl.question("두번째 배열 숫자 입력 :\n>> ").split(" ").map((el) => parseInt(el));
secondGraph.push(secondVector);

firsetVector.sort((a, b) => a - b);
secondVector.sort((a, b) => b - a);


for (let i = 0; i < change; i++) {
    const firstMin = firstGraph[0][i];
    const secondMax = secondGraph[0][i];

    if (firstMin > secondMax -1) break;

    firstGraph[0][i] = secondMax;
    secondGraph[0][i] = firstMin;
};

const sum = firstGraph[0].reduce((a, b) => a + b);

console.log(sum);
console.log(firstGraph, secondGraph);