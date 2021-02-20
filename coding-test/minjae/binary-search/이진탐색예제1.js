const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

function binarySearch(array, target, start, end) {
    const mid = Math.ceil((start + end) / 2);
    
    if (start > end) return -1 //원소 존재x
    
    if (array[mid] === target) return mid + 1;
    else if (array[mid] > target) return binarySearch(array, target, start, mid - 1);
    else return binarySearch(array, target, mid + 1, end);
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const [n, target] = input.shift().split(" ").map(Number);
    const inputArray = input.shift().split(" ").map(Number).sort((a, b) => a - b);

    console.log(binarySearch(inputArray, target, 0, n - 1));
});