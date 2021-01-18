const rl = require("readline-sync");
const input_data = rl.question("현재 나이트의 위치를 입력하시오.\n>>").toLowerCase();

// console.log(input_data);

const column = parseInt(input_data[0].charCodeAt(0)) - parseInt('a'.charCodeAt(0)) + 1;
const row = parseInt(input_data[1]);

// console.log(column);
// console.log(row);

const steps = [ [-2, -1], [-1, -2], [1, -2], [2, -1],
[2, 1], [1, 2], [-1, 2], [-2, 1] ];

// console.log(steps);
// console.log(steps[0]);

let result = 0;
let next_row, next_column = 0;

for (let i = 0; i < 8; i++){
  next_column = column + steps[i][1];
  next_row = row + steps[i][0];

  if (next_row >= 1 && next_row <= 8 && next_column >= 1 && next_column <= 8){
    result += 1;
  }
}

console.log(result);
