const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

//전역 변수
const input = [];

function solution(n) {
    const arithmeticSequence = [];

    let [one, ten, hundred] = [0, 0, 0];

    for (let i = 1; i <= n; i++) {
        if (i < 100) arithmeticSequence.push(i);
        else {
            hundred = parseInt(i / 100);
            ten = parseInt((i % 100) / 10);
            one = i % 10;
            if ((one - ten) === (ten - hundred)) arithmeticSequence.push(i);
        }
    }
    return arithmeticSequence.length;
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const range = parseInt(input.shift());

    console.log(solution(range));
})