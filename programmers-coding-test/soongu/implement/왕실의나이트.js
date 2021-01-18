`use strict`

const rl = require("readline-sync");
const data = rl.question("나이트의 위치를 입력해주세요.\n>> ").split('');

let row = (data[0].charCodeAt() - 'a'.charCodeAt()) + 1;
let column = parseInt(data[1]);

let next_row = 0;
let next_column = 0;
let [next_row, next_column] = [0, 0];
let count = 0;

const steps = [[-2, -1], [-2, 1], [2, 1], [2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

for (let step of steps) {
  next_row = row + step[0];
  next_column = column + step[1];

  if (next_row >= 1 && next_row <= 8 && next_column >= 1 && next_column <= 8) {
    count++;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> master
