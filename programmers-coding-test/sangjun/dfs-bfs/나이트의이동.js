const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = []; 
let graph = []; 
let n = 0; 
let dx = [-1, -2, -2, -1, 1, 2, 2, 1]; 
let dy = [-2, -1, 1, 2, -2, -1, 1, 2]; 

rl.on("line", (line) => { input.push(line); }).on("close", () => { 
        let t = Number(input.shift()); 
        for (let i = 0; i < t; i++) { 
            n = Number(input.shift()); 
            graph = Array.from(Array(n), () => Array(n).fill(0));  
            let [mx, my] = input.shift().split(" ").map((el) => Number(el));
            let [zx, zy] = input.shift().split(" ").map((el) => Number(el)); 
            bfs(mx, my, zx, zy); 
        } 
});


function bfs(mx, my, zx, zy) { 
    graph[mx][my] = 1; 
    graph[zx][zy] = 2; 
    
    let stack = [mx, my]; 
   
    let cnt = 0; 
    while (stack.length !== 0) { 
        cnt++; 
        let num = Number(stack.length / 2); 
        
        for (let k = 0; k < num; k++) { 
            let x = stack.shift(); 
            let y = stack.shift(); 
            
            if (mx === zx && my === zy) { 
                console.log(0); 
                return; 
            } 
            for (let j = 0; j < dx.length; j++) { 
                const [nx, ny] = [x + dx[j], y + dy[j]];
                   
                if (checkGraph(nx, ny) && graph[nx][ny] === 0) { 
                    graph[nx][ny] = 1; 
                    stack.push(nx, ny); 
                } 
               
                if (checkGraph(nx, ny) && graph[nx][ny] === 2) { 
                    console.log(cnt); 
                    return; 
                }
            } 
        } 
    } 
}; 

const checkGraph = (i, j) => { 
    if (i >= 0 && i < n && j >= 0 && j < n) return true; 
    return false; 
}; 
