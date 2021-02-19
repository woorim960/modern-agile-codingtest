const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const resultArr = [];

for (let i = 1; i < input.length; i++) {
    resultArr.push(+input[i]);
}

resultArr.sort((a, b) => a -b);

console.log(resultArr.join("\n"));