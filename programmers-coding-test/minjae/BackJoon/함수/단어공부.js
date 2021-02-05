const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const result = [];
    const word = input.shift().toUpperCase().split("");

    let obj = {};
    let maxWordCount = 0;
    
    for (let i = 0; i < word.length; i++) {
        obj[word[i]] = 0;
    }
    
    for (let i = 0; i < word.length; i++) {
        obj[word[i]]++;
    }

    maxWordCount = Math.max(...Object.values(obj));
    
    for (let el in obj) {
        if (obj[el] === maxWordCount) result.push(el);
    }

    if(result.length > 1) return console.log('?');
    else return console.log(result[0]);
})