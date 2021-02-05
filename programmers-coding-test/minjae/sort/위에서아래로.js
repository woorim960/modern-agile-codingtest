const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const count = parseInt(input.shift());
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push(parseInt(input[i]));
    }
    console.log(result.sort((a, b) => b - a));
})