const rl = require("readline-sync");

const MIN = 2;
const MAX = 1001;
const [ N, M, K ] = rl.question("입력해주세요.\n>> ").split(" ").map(val => parseInt(val));

const numbers = [];
for (let i = 0; i < N; i++) {
  numbers.push(parseInt(Math.random() * (MAX - MIN) + MIN));
}

numbers.sort((a, b) => b - a);
maxNumbers = numbers.slice(0, 2);
console.log(`2 ~ 1000 사이의 랜덤 숫자 ${N}개 (정렬되었음) : ${numbers}\n\n`);

// 1
let cnt = 0;
let total = 0;
while (cnt < M) {
  for (let i = 0; i < K; i++) {
    if (cnt < M) {
      total += maxNumbers[0];
      cnt++;
    }
  }
  if (cnt >= M) break;
  total += maxNumbers[1];
  cnt++;
}
console.log(`1번 알고리즘 : ${total}`);

// 2
total = 0;
cnt = parseInt(M / (K + 1)) * K;
cnt += M % (K + 1);

total += maxNumbers[0] * cnt;
total += maxNumbers[1] * (M - cnt);
console.log(`2번 알고리즘 : ${total}`);

// 3 => M % K 가 0 일 때는 안된다.
total = 0;
const firstNumCnt = Math.round((M / (K + 1) * K));
const secondNumCnt = M - firstNumCnt; // parseInt(M / (K + 1))

total += maxNumbers[0] * firstNumCnt;
total += maxNumbers[1] * secondNumCnt;
console.log(`3번 알고리즘 : ${total}`);
