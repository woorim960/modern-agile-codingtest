const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
}); 

let input = []; 
let graph = []; 
let n = 0; 
let count = 0; 

let dx = [1, -1, 0, 0]; 
let dy = [0, 0, 1, -1]; 
rl.on("line", (line) => { input.push(line); }).on("close", () => { 
    n = input.shift(); 
    for (let i = 0; i < n; i++) { 
        graph.push(input[i].split("").map((el) => Number(el))); 
    }   
    solution(); 
});

const solution = () => { 
    let cnt = [];
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) { 
            if (graph[i][j] === 1) { 
                dfs(i, j);
                cnt.push(count); 
                count = 0; 
            } 
        } 
    } 
    console.log(cnt.length); 
    cnt.sort((a, b) => a - b);  
    cnt.map((el) => console.log(el)); 
};

const dfs = (i, j) => { 
    if (checkGraph(i, j) && graph[i][j] === 1) {
        if (graph[i][j] === 1) { 
            count++;
            graph[i][j] = 0; 
            dfs(i + 1, j); 
            dfs(i, j + 1); 
            dfs(i - 1, j); 
            dfs(i, j - 1);
        }
    } 
}; 

function checkGraph(i, j) { 
    if (i > -1 && i < n && j > -1 && j < n)  return true; 
    return false; 
};