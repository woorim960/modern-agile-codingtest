const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const totalPartCount = parseInt(input[0]);
    const totalParts = input[1].split(" ").map(Number);
    const reqPartCount = parseInt(input[2]);
    const reqParts = input[3].split(" ").map(Number); 

    let result = [];
    for (let part of reqParts) {
        totalParts.includes(part) ? result.push('yes') : result.push('no');
    }
    
    console.log(result.join(" "));
});