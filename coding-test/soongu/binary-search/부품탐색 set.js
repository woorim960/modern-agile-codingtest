const fs= require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);
let product = new Set(input[1].split(' ').map(Number));
const M = parseInt(input[2]);
const order = input[3].split(' ').map(Number);

product = Array.from(product);
for (let i of order) {
    if (product.includes(i) === false) process.stdout.write(`no `);
    else process.stdout.write(`yes `);
}