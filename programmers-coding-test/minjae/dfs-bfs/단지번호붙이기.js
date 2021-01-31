const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const [dx, dy] = [[1, -1, 0, 0], [0, 0, 1, -1]];
let input = [];
let complex = []; 
let complexSize = 0;
let home = 0;

function solution() {
    let result = [];
  
    for (let i = 0; i < complexSize; i++) {
      for (let j = 0; j < complexSize; j++) {
            if (complex[i][j] === 1) {
                dfs(i, j);

                //모든 dfs 재귀함수 호출 이후 
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
    if (rangeCheck(x, y) && complex[x][y] === 1) {
        complex[x][y] = 0; 
        home += 1;

        for (let i = 0; i < dx.length; i++) {
            dfs(x + dx[i], y + dy[i]);
        }
    }
}

function rangeCheck(x, y) {
    if (x >= 0 && x < complexSize && y >= 0 && y < complexSize) {
        return true;
    }
    return false;
}

//입력 및 결과 출력
rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    complexSize = input[0];
    complex = Array.from(Array(complexSize), () => new Array(complexSize));

    for (let i = 0; i < complexSize; i++) { 
        complex[i] = input[i].split("").map(el => parseInt(el)); 
    }

    solution();

    process.exit();
});