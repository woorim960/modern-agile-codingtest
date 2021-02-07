const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const N = input[0];
input = input.slice(1);
const array = Array.from(Array(N).fill(0));
for (let i = 0; i < N; i++) {
    array[i] = input[i];
}

array.sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
    process.stdout.write(` ${array[i]} `);
}
