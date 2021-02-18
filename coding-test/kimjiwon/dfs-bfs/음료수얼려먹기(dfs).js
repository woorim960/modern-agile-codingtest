`use strict`;

const n = 5;
const m = 4;
const drink = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];
//0을 찾는다 처음자리 0,0
//그 위아래양옆을 뒤진다. => dfs
//0이 있으면 자리 옮기고 그 자리는 1
//위아래옆 중복되어 0이면 다 1로
//없으면 카운트 +1
let icecream = 0;

function navigation(x, y) {
  if (x > m - 1 || x < 0 || y > n - 1 || y < 0) return false;

  if (drink[x][y] === 0) {
    drink[x][y] = 1;
    navigation(x, y - 1);
    navigation(x + 1, y);
    navigation(x, y + 1);
    navigation(x - 1, y);
    return true;
  }
  return false;
}

for (let row = 0; row < m; row++) {
  for (let column = 0; column < n; column++) {
    if (navigation(row, column)) icecream++;
  }
}
console.log(icecream);
