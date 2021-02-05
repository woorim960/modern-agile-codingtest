const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); 

let input = []; 
let graph = []; 
let dfsVisited = []; 
let bfsVisited = []; 
let dfsGraph = []; 
let bfsGraph = []; 

rl.on("line", (line) => { input.push(line); }).on("close", () => { 
    let [n, m, v] = input[0].split(" ").map((el) => parseInt(el)); 
    input = input.slice(1); 
    graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); 
     
    for (let i of input) { 
        let [x, y] = i.split(" ").map((el) => parseInt(el)); 
        graph[x][y] = 1;
        graph[y][x] = 1; 
    } 
    
    dfsVisited = new Array(n + 1).fill(false); 
    bfsVisited = new Array(n + 1).fill(false);

    dfs(v); 
    bfs(v); 
    
    console.log(dfsGraph.join(" ")); 
    console.log(bfsGraph.join(" ")); 
});

function dfs(v) {  
    dfsVisited[v] = true; 
    dfsGraph.push(v); 
    for (let i = 1; i < graph.length; i++) { 
        
        if (graph[v][i] === 1 && dfsVisited[i] === false) { 
            dfs(i); 
        } 
    } 
};

function bfs(v) { 
    let Queue = []; 
    Queue.push(v);  
    bfsGraph.push(v); 

    while (Queue.length !== 0) { 
        let delqueue = Queue.shift(); 
        bfsVisited[delqueue] = true; 
        for (let i = 1; i < graph.length; i++) { 
            if (graph[delqueue][i] === 1 && bfsVisited[i] === false) { 
                bfsVisited[i] = true; 
                Queue.push(i); 
                bfsGraph.push(i); 
            } 
        } 
    } 
    return; 
};

