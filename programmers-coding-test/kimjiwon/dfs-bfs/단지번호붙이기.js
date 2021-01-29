const readline = require("readline");

let input = [];
let map = [];
let result = [];
let [total, count] = [0, 0];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line.trim())).on("close", () => {
  const size = parseInt(input[0]);
  input.splice(0, 1);
  for (let i of input) {
    map.push(i.split("").map(Number));
  }

  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (navi(x, y, size)) {
        total++;
        result.push(count);
        count = 0;
      }
    }
  }
  result.sort((a, b) => a - b);
  result.unshift(total);
  console.log(result.join("\n"));
});

const navi = (x, y, size) => {
  if (x < 0 || x > size - 1 || y < 0 || y > size - 1) return false;
  if (map[x][y] === 1) {
    count++;
    map[x][y] = 2;
    navi(x, y - 1, size);
    navi(x + 1, y, size);
    navi(x, y + 1, size);
    navi(x - 1, y, size);
    return true;
  }
  return false;
};
