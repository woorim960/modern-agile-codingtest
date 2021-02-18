const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout 
}); 
 
let input = []; 
let graph = []; 
let visited = []; 
rl.on("line", (line) => { input.push(line); }).on("close", () => { 
        let [n] = input.map((el) => parseInt(el)); 
        input = input.slice(2); 
        graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

        for (let i of input) { 
            let [x, y] = i.split(" ").map((el) => parseInt(el)); 
            graph[x][y] = 1; 
            graph[y][x] = 1; 
        } 
    solution(n);
});

const solution = (n) => { 
    visited = new Array(n + 1).fill(false); 

    dfs(n, 1);

    let cnt = 0; 
    for (let i = 2; i <= n; i++) { 
        if (visited[i] === true) { 
            cnt++; 
        } 
    } 
    console.log(cnt); 
} 

function dfs(n, start) { 
    visited[start] = true; 
    for (let i = 1; i <= n; i++) { 
        if (graph[start][i] === 1 && visited[i] === false) { 
             dfs(n, i); 
        } 
    } 
} 

