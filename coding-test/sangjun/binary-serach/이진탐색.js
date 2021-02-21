const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
const target = +input[1];
const array = input[2].split(" ").map(Number).sort((a, b) => a - b);


function binarySearch(target, array, start, end) {
    const mid = parseInt((start + end) / 2);

    if (start > end) return console.log("존재 x");
    if (array[mid] === target) return console.log(mid + 1);

    array[mid] < target ?
        binarySearch(target, array, mid, end) : binarySearch(target, array, start, mid);
};

binarySearch(target, array, 0, n - 1);


