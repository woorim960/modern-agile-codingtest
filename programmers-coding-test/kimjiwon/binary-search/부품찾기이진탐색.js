const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const result = [];
const N = +input[0];
const M = +input[2];
const product = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const needed = input[3].split(" ").map(Number);

const findProduct = (product, cilent, start, end) => {
  const mid = parseInt((end + start) / 2);

  if (product[mid] === cilent) return result.push("yes");
  if (mid < -1 || start >= end) return result.push("no");

  product[mid] < cilent
    ? findProduct(product, cilent, mid + 1, end)
    : findProduct(product, cilent, start, mid - 1);
};

for (let i of needed) {
  findProduct(product, i, 0, N - 1);
}

console.log(result.join(" "));
