const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

function binarySearch(array, target, start, end) {
    let mid = 0;
    
    while (start <= end) {
        mid = Math.ceil((start + end) / 2);
        
        if (array[mid] === target) return 'yes';
        else if (array[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return 'no';
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const totalPartCount = parseInt(input[0]);
    const totalParts = input[1].split(" ").map(Number).sort((a, b) => a - b);
    const reqPartCount = parseInt(input[2]);
    const reqParts = input[3].split(" ").map(Number); 

    let result = [];
    for (let reqPart of reqParts) {
        result.push(binarySearch(totalParts, reqPart, 0, totalPartCount - 1));
    }
    console.log(result.join(" "));
});