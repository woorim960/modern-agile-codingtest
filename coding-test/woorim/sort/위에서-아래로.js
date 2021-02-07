const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

const unsorted = [];
for (let i = 1; i <= N; i++) {
  unsorted.push(Number(input[i]));
}

unsorted.sort((a, b) => b - a);

console.log(unsorted);

