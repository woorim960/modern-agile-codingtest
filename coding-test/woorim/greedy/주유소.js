const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N] = input[0].split(" ").map(Number);

const roadLengthes = input[1].split(" ").map(BigInt);
const pricePerRoads = input[2].split(" ").map(BigInt);

function solution() {
  let minPrice = pricePerRoads[0];
  let total = BigInt(0);
  for (let i = 0; i < N - 1; i++) {
    if (pricePerRoads[i] < minPrice) {
      minPrice = pricePerRoads[i];
    }
    total += minPrice * roadLengthes[i];
  }
  return total;
}

console.log(`${solution()}`);

