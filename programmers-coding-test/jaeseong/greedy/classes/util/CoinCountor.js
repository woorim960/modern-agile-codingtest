const COINS = [500, 100, 50, 10];
export default class CoinCountor {
  calculate(unitInput) {
    let count = [];
    let total = 0;

    for (let i = 0; i < coinList.length; i++) {
      count[i] = parseInt(unitInput / coinList[i]); // 동전갯수
      unitInput %= coinList[i]; // 거스름돈
      total += count[i]; //동전개수
    }
    return { count, total };
  }
}
