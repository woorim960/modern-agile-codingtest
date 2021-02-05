const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

let input = []; 
let [m, n, k] = [0]; 
let graph = []; 

rl.on("line", (line) => { input.push(line); }).on("close", () => { 
    let t = parseInt(input[0]);
    input = input.slice(1);
    for (let i = 0; i < t; i++) { 
        [m, n, k] = input[0].split(" ").map((el) => parseInt(el));
        graph = Array.from(Array(m), () => Array(n).fill(0)); 
        for (let j = 1; j <= k; j++) { 
            let [x, y] = input[j].split(" ").map((el) => Number(el)); 
            graph[x][y] = 1; 
        } 
        solution(); 
        input = input.slice(k + 1); 
        graph.length = 0; 
    } 
});

const solution = () => { 
    let cnt = 0; 
    for (let i = 0; i < m; i++) { 
        for (let j = 0; j < n; j++) { 
            if (graph[i][j] === 1) {
                 dfs(i, j); 
                 cnt += 1; 
            } 
        } 
    } 
    console.log(cnt); 
};

function dfs(i, j) { 
    if (checkGraph(i, j) === true) { 
        if (graph[i][j] === 1) { 
            graph[i][j] = 0; 
            dfs(i + 1, j);  
            dfs(i, j + 1); 
            dfs(i - 1, j);
            dfs(i, j - 1);
        }
    } 
};

function checkGraph(i, j) { 
    if (i > -1 && i < m && j > -1 && j < n) return true; 
    return false; 
};

