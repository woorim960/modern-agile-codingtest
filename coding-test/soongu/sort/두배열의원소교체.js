const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, K] = input[0].split(' ');
input = input.slice(1);


const firstArray = Array.from(input[0].split(' ').map(Number));
const secondArray = Array.from(input[1].split(' ').map(Number));

firstArray.sort((a, b) => a - b);
secondArray.sort((a, b) => b - a);

for (let i = 0; i < K; i++) {
    if (firstArray[i] < secondArray[i]) {
        [firstArray[i], secondArray[i]] = [secondArray[i], firstArray[i]];
    } else {
        break;
    }
}

const result = firstArray.reduce((prev, curr) => prev + curr);
console.log(result);