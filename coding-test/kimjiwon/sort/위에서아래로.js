const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");
let numberArr = [];
const N = +input[0];

for (let i = 1; i < N + 1; i++) {
  numberArr.push(+input[i]);
}

numberArr.sort((a, b) => b - a);
console.log(numberArr.join(" "));
