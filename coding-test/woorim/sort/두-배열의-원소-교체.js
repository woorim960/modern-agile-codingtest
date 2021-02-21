const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const A = input[1].split(" ").map(Number).sort((a, b) => a - b);
const B = input[2].split(" ").map(Number).sort((a, b) => b - a);

for (let i = 0; i < K; i++) {
  if (A[i] < B[i]) {
    [A[i], B[i]] = [B[i], A[i]];
  } else {
    break;
  }
}

const total = A.reduce((acc, el) => acc + el);
console.log(total);

