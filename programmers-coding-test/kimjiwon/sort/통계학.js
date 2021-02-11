const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const N = +input[0];
const numbers = [];
const compareArr = [];

for (let i = 1; i < N + 1; i++) numbers.push(+input[i]);

const length = numbers.length;

numbers.sort((a, b) => a - b);

const avg = Math.round(numbers.reduce(((a, b) => a + b)) / N);
const middle = numbers[parseInt(length / 2)];
const compareNumbers = numbers.reduce((obj, n) => {
    obj[n] = (obj[n] || 0) + 1;
    return obj;
}, {});

let maxNum = Math.max(...Object.values(compareNumbers));
for (let j in compareNumbers) {
    if (compareNumbers[j] === maxNum) compareArr.push(parseInt(j));
}

const range = numbers[numbers.length - 1] - numbers[0];

console.log(avg);
console.log(middle);
compareArr.length < 2 ? console.log(compareArr[0]) : console.log(compareArr.sort((a, b) => a - b)[1]);
console.log(range)
