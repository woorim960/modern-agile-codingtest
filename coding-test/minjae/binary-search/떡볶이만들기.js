const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

function binarySearch(array, target, start, end) {
    let [total, mid, result] = [0, 0, 0];

    while (start <= end) {
        total = 0;
        mid = Math.ceil((start + end) / 2);

        for (let el of array) {
            if (el > mid) total += el - mid 
        }

        if (total < target) end = mid - 1;
        else {
            result = mid;
            start = mid + 1;
        }
    }
    return result;
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () {
    const [riceCakeCount, reqRiceCakeLength] = input.shift().split(" ").map(Number);
    const riceCakes = input.shift().split(" ").map(Number);
    const maxRiceCakeLength = Math.max(...riceCakes);

    console.log(binarySearch(riceCakes, reqRiceCakeLength, 0, maxRiceCakeLength));
});