const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const [dx, dy] = [[1, -1, 0, 0], [0, 0, 1, -1]];
let input = [];
let graph = []; 
let home = 0;

function solution() {
    const result = [];
  
    for (let i = 0; i < node; i++) {
      for (let j = 0; j < node; j++) {
            if (graph[i][j] === 1) {
                dfs(i, j);

                //dfs 재귀함수 호출 이후 
                result.push(home);
                home = 0;
            }
        }
    }
    console.log(result.length);
    result.sort((a, b) => a - b);
    result.map(el => console.log(el)); 
};

function dfs(x, y) {
    if (rangeCheck(x, y) && graph[x][y] === 1) {
        graph[x][y] = 0; 
        home += 1;

        for (let i = 0; i < dx.length; i++) {
            dfs(x + dx[i], y + dy[i]);
        }
    }
}

function rangeCheck(x, y) {
    if (x >= 0 && x < node && y >= 0 && y < node) return true;
    return false;
}

//입력과 출력
rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    node = input.shift();
    graph = Array.from(Array(node), () => new Array(node));

    for (let i = 0; i < node; i++) { 
        graph[i] = input[i].split("").map(el => Number(el)); 
    }

    solution();
});