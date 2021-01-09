const STANDARD_MONEYS = [10000, 5000, 1000, 500, 100, 50, 10];

function solution(change) {
  let cnt = 0;
  for (let stdMoney of STANDARD_MONEYS) {
    cnt += parseInt(change / stdMoney);
    change %= stdMoney;
  }
  return cnt;
}

console.log(solution(1260));
console.log(solution(800));
console.log(solution(10000));
