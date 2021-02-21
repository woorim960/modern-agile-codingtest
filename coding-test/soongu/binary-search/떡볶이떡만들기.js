const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [ N, M ] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);
let start = 0;
let end = Math.max.apply(0, array);
let result = 0;

while(start <= end) {
    const mid = parseInt((start + end) / 2);
    let total = 0;
    for (let i of array) {
        if (i > mid) total += i - mid;
    }
    if (total < M) end = mid - 1;
    else {
        result = mid;
        start = mid + 1;   
    }
} 

console.log(result);
