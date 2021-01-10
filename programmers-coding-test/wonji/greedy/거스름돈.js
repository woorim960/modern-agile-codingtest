const money = prompt(`거슬러 줘야 할 돈을 입력해주세요.
(만원 이하로)`);

const COINS = [5000, 1000, 500, 100, 50, 10];

function solution(money) {
  const change = [];

  for (let i = 0; money !== 0; i++) {
    const count = Math.floor(money / coins[i]);

    change[i] = {
      거스름돈: coins[i],
      갯수: count,
    };

    if (count > 0) {
      money %= coins[i];
    }
  }
  return change;
}