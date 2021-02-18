const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const [m, n] = input[0].split(" ").map(Number);

let graph = [];
let queue = [];
let rawTomato = 0;
let cnt = 0;

solution(); 


function solution() {
    for (let i = 1; i < n + 1; i++) {
      graph.push(input[i].split(" ").map(Number));
      for (let j = 0; j < graph[i - 1].length; j++) {
        if (graph[i - 1][j] === 1) queue.push([i - 1, j]);
        if (graph[i - 1][j] === 0) rawTomato++;
      }
    }
  
    bfs(queue);
    rawTomato !== 0 ? console.log(-1) : console.log(cnt - 2);
}

function bfs(queue) { 
    let queueCurser = 0;
    while (queue.length > queueCurser) { 
        const [x, y] = queue[queueCurser++];
        cnt = graph[x][y] + 1;
        for (let i = 0; i < dx.length; i++) { 
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (checkGraph(nx, ny) && graph[nx][ny] === 0) { 
                rawTomato--;
                queue.push([nx, ny]);
                graph[nx][ny] = cnt;
            } 
        } 
    }  
}; 

function checkGraph(i, j) { 
        if (i >= 0 && i < n && j >= 0 && j < m) return true;  
        return false; 
};
