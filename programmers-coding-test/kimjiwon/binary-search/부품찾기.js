const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");
const result = [];
const N = +input[0];
const product = input[1].split(" ").map(Number);
const M = +input[2];
const needed = input[3].split(" ").map(Number);

for (let i of needed)
  product.includes(i) ? result.push("yes") : result.push("no");

console.log(result.join(" "));
