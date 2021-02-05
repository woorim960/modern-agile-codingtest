const rl = require("readline-sync");

const location = rl.question("나이트의 현재 위치 브리핑해").split("");
const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
const columns = ["1", "2", "3", "4", "5", "6", "7", "8"];
const moves = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]];

let count = 0;
let nextRow, nextColumn;

for (let i of moves) {
  nextColumn = nextRow = 0;
  nextRow = rows.indexOf(location[0]) + 1 + i[0];
  nextColumn = columns.indexOf(location[1]) + 1 + i[1];
  if (nextRow < 9 && nextRow > 0 && nextColumn < 9 && nextColumn > 0) {
    count++;
  }
}
console.log(count);
