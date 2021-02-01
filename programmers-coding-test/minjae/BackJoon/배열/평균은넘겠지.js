const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];

function solution(n, m) {
   const sumPoint = n.reduce((a, b) => a + b);
   const averagePoint = Math.floor(sumPoint / m);

   let count = 0;
   for(let i = 0; i < n.length; i++) {
       if(n[i] > averagePoint) count++;
   }
    return ((count / m) * 100).toFixed(3);
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const testCase = parseInt(input.shift());

    let studentNumber = 0;
    let studentScore = [];

    for (let i = 0; i < testCase; i++) {
        studentScore = input.shift().split(" ").map(el => parseInt(el));
        studentNumber = studentScore.shift();
        
        console.log(solution(studentScore, studentNumber) + '%');
    }
})