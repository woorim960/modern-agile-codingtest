const readline = require("readline");

let input = [];
let cabbageField = [];
let result = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line.trim())).on("close", () => {
  const test = parseInt(input[0]);
  input.splice(0, 1);
  for (let repeat = 0; repeat < test; repeat++) {
    let count = 0;
    const [x, y, size] = input[0].split(" ").map(Number);
    input.splice(0, 1);

    cabbageField = Array.from(Array(y), () => Array(x).fill(0));

    for (let i = 0; i < size; i++) {
      let cabbage = input[i].split(" ").map(Number);
      cabbageField[cabbage[1]][cabbage[0]] = 1;
    }
    //배추밭 만들기
    for (let i = 0; i < cabbageField.length; i++) {
      for (let j = 0; j < cabbageField[i].length; j++) {
        if (dfs(i, j, y, x)) count++;
      }
    }

    result.push(count);
    input.splice(0, size);
    cabbageField.length = 0;
  }
  console.log(result.join("\n"));
});

const dfs = (x, y, xLength, yLength) => {
  if (x < 0 || x > xLength - 1 || y < 0 || y > yLength - 1) return false;
  if (cabbageField[x][y] === 1) {
    cabbageField[x][y] = 2;
    dfs(x + 1, y, xLength, yLength);
    dfs(x - 1, y, xLength, yLength);
    dfs(x, y + 1, xLength, yLength);
    dfs(x, y - 1, xLength, yLength);
    return true;
  }
  return false;
};
