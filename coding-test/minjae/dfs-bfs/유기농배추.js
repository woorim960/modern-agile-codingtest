const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];
let farm = [];
let testCase = 0;
let farmHeight, farmWidth, cabbages;
formHeight = formWidth = cabbages = 0;

function solution() { 
    let earthworm = 0;

    for (let i = 0; i < farmHeight; i++) { 
        for (let j = 0; j < farmWidth; j++) { 
            if (farm[i][j] === 1) { 
                dfs(i, j); 
                earthworm += 1;
            } 
        } 
    } 
    return earthworm; 
}

function dfs(x, y) {
    if (rangeCheck(x, y)) {
        if (farm[x][y] === 1) {
            farm[x][y] = 2;
            dfs(x + 1, y);
            dfs(x, y + 1);
            dfs(x - 1, y);
            dfs(x, y - 1);
        }
    }
}

function rangeCheck(x, y) {
    if (x >= 0 && x < farmHeight && y >= 0 && y < farmWidth) return true;
    return false;
}

function createForm(input) {
    [farmHeight, farmWidth, cabbages] = input[0].split(" ").map(el => parseInt(el));
    farm = Array.from(Array(farmHeight), () => new Array(farmWidth).fill(0));

    for (let j = 1; j <= cabbages; j++) {
        let [x, y] = input[j].split(" ").map(el => parseInt(el));
        farm[x][y] = 1;
    }
}

//입력 및 결과 출력
rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    testCase = input[0];
    input = input.slice(1);

    for (let i = 0; i < testCase; i++) {
        createForm(input);
        console.log(solution());
        input = input.slice(cabbages + 1);
    }
});