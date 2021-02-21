const fs= require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);
const product = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const order = input[3].split(' ').map(Number);

function binary_search(product, target, start, end) {
    const mid = parseInt((start + end) / 2);
    while (start <= end) {
        if (product.includes(target) === false) return undefined;
        if (product[mid] === target) return mid;
        if (product[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
}

for (let i of order) {
    let result = binary_search(product, i, 0, N - 1);
    if (result === undefined) process.stdout.write(`no `);
    process.stdout.write(`yes `);
}
