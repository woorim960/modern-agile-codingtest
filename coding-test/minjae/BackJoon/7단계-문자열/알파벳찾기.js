const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

function solution(compareList, asciiWords) {
    const result = [];
    const asciiA = 'a'.charCodeAt(0);

    asciiWords.map(asciiWord => {
        compareList[asciiWord - asciiA] = asciiWord
    })
    
    compareList.map(element => {
        result.push(asciiWords.indexOf(element));
    })

    return result.join(" ")
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const words = input.shift().split("").map(el => el);
    const [asciiWords, compareList] = [[], []];

    for (let i = 0; i < 26; i++) {
        compareList.push(-1);
    }
    
    words.map(word => {
        asciiWords.push(word.charCodeAt(0));
    })

    console.log(solution(compareList, asciiWords));
});