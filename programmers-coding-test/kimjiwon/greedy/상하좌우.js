const rl = require("readline-sync");
const boxsize = +rl.question("크기는 어떻게 될까요?");
const move = rl
  .question("움직인 방향은?(R: 오른쪽, L: 왼쪽, U:위, D: 아래)")
  .split(" ");

let row, column;
row = column = 1;

for (let i of move) {
  i === "R"
    ? column++
    : i === "L"
    ? column--
    : i === "U"
    ? row--
    : i === "D"
    ? row++
    : row;

  !row ? row++ : !column ? column++ : column;
  row > boxsize ? row-- : column > boxsize ? column-- : column;
}

console.log(`${row} ${column}`);
