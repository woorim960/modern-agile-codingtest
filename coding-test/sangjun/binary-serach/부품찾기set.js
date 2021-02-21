const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
let target = new Set(input[1].split(" ").map(Number).sort((a, b) => a - b));
const m = input[2];
const checkReq = input[3].split(" ").map(Number);

target = Array.from(target);
const result = []

for (let i of checkReq) {
    target.includes(i) ? 
    process.stdout.write("no") : process.stdout.write("yes");
}