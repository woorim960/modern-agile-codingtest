const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const count = +input[0];
const target = input[1];
const array = input[2].split(" ");

const seqSearch = (count, target, array) => {
  for (let i in array) {
    if (target === array[i]) return +i + 1;
    if (count === +i + 1) return "no here";
  }
};

console.log(seqSearch(count, target, array));
