const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

function binarySearch(array, target, start, end) {
    let mid = 0;
    
    while(start <= end) {
        mid = Math.ceil((start + end) / 2);
        
        if (array[mid] === target) return mid + 1;
        else if (array[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1; //원소 존재x
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const [n, target] = input.shift().split(" ").map(Number);
    const inputArray = input.shift().split(" ").map(Number).sort((a, b) => a - b);

    console.log(inputArray);
    console.log(binarySearch(inputArray, target, 0, n - 1));
});