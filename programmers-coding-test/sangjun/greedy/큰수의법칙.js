function largeNumRule(n, m, k) {
  const randomNum = [];

  let result = 0;

  for (let i = 0; i < n; i++) {
    randomNum.push(Math.floor(Math.random() * 9 + 1));
  }

  let descendNum = randomNum.sort();
  let first = descendNum[n - 1];
  let second = descendNum[n - 2];

  while (true) {
    for (let i = 0; i < k; i++) {
      if (m == 0) {
          break;
      }
    result += first
    m--;
    }
    if (m == 0) {
      break;
    }
  result += second;
  m--;
}

  console.log(descendNum)
  return result;

}

console.log(largeNumRule(5, 4, 2));
