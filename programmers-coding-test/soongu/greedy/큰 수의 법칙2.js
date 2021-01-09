`use strict`
// N = 배열의 크기
// M = 숫자가 더해지는 횟수
// K = 가장 큰 수 반복 제한 횟수
const rl = require("readline-sync");

let [ n, m, k] = rl.question("N, M, K 입력해주세요.\n>> ").split(',');

let data = rl.question("data 입력해주세요.\n>> ").split('');

for (let i = 0; i < data.length; i++) {
  data[i] = parseInt(data[i]);
}

n = parseInt(n);
m = parseInt(m);
k = parseInt(k);
data.sort((a, b) => a - b);

let first = data[n - 1];
let second = data[n - 2];
 
let count = parseInt(m / (k + 1) * k);
count += m % (k + 1);

let result = 0;
result += (count) * first;
result += (m - count) * second;

console.log(result);



