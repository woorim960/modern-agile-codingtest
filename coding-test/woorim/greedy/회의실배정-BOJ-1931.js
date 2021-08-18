const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = parseInt(input[0]);
const M = [];
for (let i = 1; i < input.length; i++) {
  M.push(input[i].split(" ").map((v) => parseInt(v)));
}

function solution(N, M) {
  // 풀이
  M.sort(([a1, a2], [b1, b2]) => {
    if (a2 === b2) {
      return a1 - b1;
    }
    return a2 - b2;
  });

  let count = 1;
  let endTime = M[0][1];

  for (let i = 1; i < M.length; i++) {
    if (M[i][0] >= endTime) {
      count++;
      endTime = M[i][1];
    }
  }

  return count;
}

console.log(solution(N, M));
