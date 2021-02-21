const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const target = input[1].split(" ").map(Number).sort((a, b) => a - b);
const m = input[2];
const checkReq = input[3].split(" ").map(Number);

const result = [];


function binarySearch(target, array, start, end) {
    const mid = parseInt((start + end) / 2);

    if (target[mid] === array) return result.push("yes");
    if (mid < -1 || start >= end) return result.push("no");

    target[mid] < array ?
        binarySearch(target, array, mid + 1, end) : binarySearch(target, array, start, mid - 1);
};

for (let i of checkReq) {
    binarySearch(target, i, 0, n - 1);
}

console.log(result);