const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const N = input[0];
input = input.slice(1);
const array = [];
for (let i = 0; i < N; i++) {
    array.push(input[i]);
}

array.sort((a, b) => b - a);
array.forEach(el => process.stdout.write(`${el} `);
