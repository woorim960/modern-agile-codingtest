const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const testCase = parseInt(input.shift());

    let count = 0;

    for (let i = 0; i < testCase; i++) { 
        const result = [];
        const word = input[i].split("");

        let checkGroupWord = true; 

        word.map(el => {
            if (result.indexOf(el) === -1) result.push(el);
            else {
                if (result.indexOf(el) !== result.length - 1) checkGroupWord = false; 
            }
        })
        if (checkGroupWord) count++;
    }
    console.log(count);
});