const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

for (let i = 0; i < K; i++) {
  //두번째 방법(비효율적)
  //   const aMin = Math.min.apply(null, arrStore[0]);
  //   const bMax = Math.max.apply(null, arrStore[1]);
  //   const alocation = arrStore[0].indexOf(aMin);
  //   const blocation = arrStore[1].indexOf(bMax);
  if (A[i] >= B[i]) break; 
  [A[i], B[i]] = [B[i], A[i]];
}

const result = A.reduce((a, b) => {
  return a + b;
});

console.log(result);
