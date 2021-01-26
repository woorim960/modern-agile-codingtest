const rl = require("readline-sync");

const currentLocation = rl.question("나이트의 현재 위치 입력 :\n>> ").toUpperCase().split("");

const steps = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const columns = ["1", "2", "3", "4", "5", "6", "7", "8"];

let count, nextColumn, nextRow;
count = nextColumn = nextRow = 0;

for (let step of steps) {
    nextRow = rows.indexOf(currentLocation[0]) + 1 + step[0];
    nextColumn = columns.indexOf(currentLocation[1]) + 1 + step[1];

    
    if (nextRow > 0 && nextRow < 9 && nextColumn > 0 && nextColumn < 9) {
        count++;
    }
}

console.log(count);

