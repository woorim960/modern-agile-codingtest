const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const studentCount = parseInt(input.shift());
    const result = {};

    for (let i = 0; i < studentCount; i++) {
        let [studentName, studentPoint] = input[i].split(" ");
        result[studentPoint] = studentName;
    }

    console.log(Object.values(result).join(" "));
});