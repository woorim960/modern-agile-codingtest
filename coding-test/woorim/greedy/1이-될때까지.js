const rl = require("readline-sync");
const [ N, K ] = rl.question("입력해주세요.\n>> ").split(" ").map(val => parseInt(val));  // 조건1 : N >= K, 조건2 : N과 K는 항상 1보다 크다.
console.log(`N : ${N}, K : ${K}\n\n`);

// solution
function 일이될때까지(N, K) {
  let cnt = 0;
  while (N !== 1) {
    N = N % K ? N - 1 : N / K;  // N이 K로 나눠지지 않으면 N에서 1을 빼고, 나눠지면 N / K를 수행하여 N에 대입한다.
    cnt++;
  }
  return cnt;
}
console.log(`해답(1이 될 때까지 수행한 연산 횟수) : ${일이될때까지(N, K)}`);


// solution2 -> 1씩 빼주는 연산은 한 번에 처리해준다.
function 일이될때까지2(N, K) {
  let 나눌수있는값 = 0;
  let cnt = 0;
  while (N >= K) {
    while (N % K === 0) {
      N /= K;
      cnt++;
    }
    if (N === 1) break;
    나눌수있는값 = parseInt(N / K) * K;
    cnt += N - 나눌수있는값;
    
    N = 나눌수있는값;
  }
  cnt += N - 1;
  return cnt;
}
console.log(`해답2(1이 될 때까지 수행한 연산 횟수) : ${일이될때까지2(N, K)}`);
