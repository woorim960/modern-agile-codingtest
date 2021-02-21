const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cakes = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const result = [];
function binarySearch(target, start, end) {
  if (start > end) return -1;
  const mid = parseInt((start + end) / 2);

  let total = 0;
  for (let cake of cakes) {
    if (cake > mid) {
      total += cake - mid;
    }
  }

  if (total === target) result.push(mid);
  if (total > target) {
    result.push(mid);
    return binarySearch(target, mid + 1, end);
  }
  if (total < target) return binarySearch(target, start, mid - 1);
}

binarySearch(M, 0, cakes[cakes.length - 1]);
console.log(result[result.length - 1]);

