const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const inputData = input.shift().split(" ");
    const inputArray = input.shift().split(" ");
    const [n, target] = [parseInt(inputData[0]), inputData[1]];

    if (!inputArray.includes(target)) return console.log(-1);

    for (let el in inputArray) {
        if (inputArray[el] === target) return console.log(parseInt(el) + 1);
    }

});