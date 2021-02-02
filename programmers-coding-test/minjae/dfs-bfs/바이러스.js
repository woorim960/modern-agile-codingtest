const { count } = require("console");
const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];
let graph = []; 
let dfsVisited = [];
let result = 0;

function dfs(computers, startNode) { 
    dfsVisited[startNode] = true; 

    for (let i = 1; i < computers; i++) { 
        if (graph[startNode][i] === 1 && !dfsVisited[i]) dfs(computers, i);
    }
}

function adjacencyMatrix(computers, input) {
    graph = Array.from(Array(computers + 1), () => Array(computers + 1).fill(0));

    for (let i of input) { 
        let [x, y] = i.split(" ").map(el => parseInt(el)); 
        [graph[x][y], graph[y][x]] = [1, 1];
    }
}

//입력 및 결과 출력
rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let [computers, networkLine] = input.map(el => parseInt(el));
    input = input.slice(2);

    dfsVisited = new Array(computers + 1).fill(false); 

    adjacencyMatrix(computers, input);

    dfs(computers, 1); 

    //모든 dfs 재귀 함수 호출 이후
    for (let i = 2; i <= computers; i++) {
        if (dfsVisited[i] === true) {
            result += 1;
        }
    }
    console.log(result);
});

