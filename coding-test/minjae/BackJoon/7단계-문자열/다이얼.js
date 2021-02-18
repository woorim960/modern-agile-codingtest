const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const alphabetList = input.shift().split("");
    const dial = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10];
    const asciiA = 'A'.charCodeAt();

    let result = 0;
    let asciiAlphabet = 0;

    alphabetList.map(alphabet => {
        asciiAlphabet = alphabet.charCodeAt(0);
        result += dial[asciiAlphabet - asciiA];
    });

    console.log(result);
});