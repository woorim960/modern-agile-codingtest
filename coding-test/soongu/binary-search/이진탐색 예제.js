function binary_search(array, target, start, end) {
    if (array[0] === target) return 0;
    if (start > end) return undefined;
    mid = parseInt((start + end) / 2);
    if (array[mid] === target) return mid;
    else if (array[mid] > target) return binary_search(array, target, start, mid - 1);
    else return binary_search(array, target, mid + 1, end);
}

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [ n, target ] = input[0].split(' ').map(Number);
const arraySet = new Set(input[1].split(' ').map(Number));
const array = Array.from(arraySet);
const result = binary_search(array, target, 0, n - 1);
if (result === undefined) {
    console.log("원소가 존재하지 않습니다");
} else {
    console.log(result + 1);
}