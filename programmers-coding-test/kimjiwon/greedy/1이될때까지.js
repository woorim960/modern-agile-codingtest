function getMinNumberCount(N, K) {
  let cnt = 0;
  while (N !== 1) {
    N = N % K ? N - 1 : N / K; // N이 K로 나눠지지 않으면 N에서 1을 빼고, 나눠지면 N / K를 수행하여 N에 대입한다.
    cnt++;
  }
  return cnt;
}

console.log(getMinNumberCount(24, 3));
