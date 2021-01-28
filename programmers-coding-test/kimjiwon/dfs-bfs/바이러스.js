const readline = require("readline");

let input = [];
let arr = [];
let visited = [];
let infection = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => input.push(line.trim())).on("close", () => {
  const [computers, pairs] = [parseInt(input[0]), parseInt(input[1])];
  input.splice(0, 2);
  arr = Array.from(Array(computers + 1), () => Array(computers + 1).fill(0));
  for (let i of input) {
    let [x, y] = i.split(" ").map(Number);
    arr[x][y] = arr[y][x] = 1;
  }
  visited = new Array(computers + 1).fill(false);

  dfs(1);
  console.log(infection.length - 1);
});

const dfs = (v) => {
  visited[v] = true;
  infection.push(v);
  for (let i in arr) {
    if (arr[v][i] === 1 && !visited[i]) {
      dfs(i);
    }
  }
};
