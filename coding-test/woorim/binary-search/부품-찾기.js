const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const products = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input[2]);
const targets = input[3].split(" ").map(Number);

function binarySearch(target, start, end) {
  if (start > end) return "no";

  const mid = parseInt((start + end) / 2);
  if (target > products[mid]) return binarySearch(target, mid + 1, end);
  if (target < products[mid]) return binarySearch(target, start, mid - 1);
  return "yes";
}

const result = [];
for (let target of targets) {
  if (products.includes(target)) result.push("yes");
  else result.push("no");
  // result.push(binarySearch(target, 0, N - 1));
}

result.forEach((el) => process.stdout.write(`${el} `));

