const fs= require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);
const product = Array(1000000).fill(0);
for (let i of input[1].split(' ')) {
    product[Number(i)] = 1;
}
const M = parseInt(input[2]);
const order = input[3].split(' ').map(Number);



for (let i of order) {
    if (product[i] === 1) process.stdout.write(`yes `);
    else process.stdout.write(`no `);
}