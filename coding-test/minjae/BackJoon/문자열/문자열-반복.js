const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];

function solution(repeatCount, str) {
    const result = [];
    const strList = str.split("");

    for (let i = 0; i < strList.length; i++) {
        for (let j = 0; j < repeatCount; j++) {
            result.push(strList[i]);
        }
    }
    return result.join("");
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const testCase = parseInt(input.shift());

    for (let i = 0; i < testCase; i++) {
        let [repeatCount, str] = input.shift().split(" ");

        console.log(solution(repeatCount, str));
    }
})